import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import localData from '../quesition.json';

const Quiz = ({navigation}) => {
  const [quesition,setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  // const [isLoading,setIsLoading] = useState(false);

  const getQuiz = async () => {
    const url ='https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    generateOptionsAndShuffle(data.results[ques]);
    console.log(quesition[ques]);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const nextHandeler = () => {
    setQues(ques + 1);
    generateOptionsAndShuffle(quesition[ques + 1]);
  };

  const exithandler = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };

  const generateOptionsAndShuffle = async _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    console.log(options);
    await shuffleArray(options);
    setOptions(options);
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handelSelectedOption = _option => {
    if (ques === 9) {
      if (_option === quesition[ques].correct_answer) {
        setScore(score + 10);
      }
      navigation.navigate('PreResult', {
        score: score,
      });
    } else {
      if (_option === quesition[ques].correct_answer) {
        setScore(score + 10);
      }
      setQues(ques + 1);
      generateOptionsAndShuffle(quesition[ques + 1]);
    }
  };

  return (
    <View style={styles.conatiner}>
      {quesition &&(
         <View style={styles.parent}> 
      <View style={styles.quetionContainer}>
        <Text style={styles.question}>
          Q {ques + 1}. {decodeURIComponent(quesition[ques].question)}
        </Text>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => {
              handelSelectedOption(options[0]);
            }} style={styles.optionButton}>
          <Text style={styles.optionText}>
            {decodeURIComponent(options[0])}{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              handelSelectedOption(options[1]);
            }} style={styles.optionButton}>
          <Text style={styles.optionText}>
            {decodeURIComponent(options[1])}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              handelSelectedOption(options[2]);
            }} style={styles.optionButton}>
          <Text style={styles.optionText}>
            {decodeURIComponent(options[2])}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              handelSelectedOption(options[3]);
            }} style={styles.optionButton}>
          <Text style={styles.optionText}>
            {decodeURIComponent(options[3])}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>

        {ques !== 9 && (
          <TouchableOpacity style={styles.button} onPress={nextHandeler}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        )}

        {ques === 9 && (
          <TouchableOpacity style={styles.button} onPress={exithandler}>
            <Text style={styles.buttonText}>Skip and Show Result</Text>
          </TouchableOpacity>
        )}
      </View>
      </View>
    )}  
  </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  conatiner: {
    padding: 12,
    height: '100%',
  },
  quetionContainer: {
    marginVertical: 16,
  },
  optionContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1A759F',
    minWidth: '30%',
    padding: 12,
    textAlign: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 28,
    fontWeight: '500',
  },
  optionButton: {
    backgroundColor: '#34A0A4',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 20,
    color: 'white',
  },
  parent: {
    height: '100%',
  },
});
