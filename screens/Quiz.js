import { Image,StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import localData from '../quesition.json';
import TimeBar from '../components/TimeBar';

const Quiz = ({navigation}) => {
  const [quesition,setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading,setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url ='https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    generateOptionsAndShuffle(data.results[ques]);
    setIsLoading(false);
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
      navigation.navigate('PreResult', {
        score: _option === quesition[ques].correct_answer ? score + 10 : score
      });
    } else {
      if (_option === quesition[ques].correct_answer) {
        setScore(score + 10);
      }
      setQues(ques + 1);
      generateOptionsAndShuffle(quesition[ques + 1]);
    }
  };


  if(!isLoading){
    setInterval(async () => {
      setQues(ques+1);
      await generateOptionsAndShuffle(quesition[ques + 1]);
    }, 15000);
  }

  return (
    <View style={styles.conatiner}>
      {isLoading ?
       <View  style={styles.loaderContainer}>
          <Image source={{uri : 'https://cdn3d.iconscout.com/3d/premium/thumb/loading-2872701-2409417.png'}} style={styles.loader} resizeMode="contain"/>
          <Text style={{fontSize:24}}>Loading Please Wait ...</Text>
       </View> 
       : quesition &&(
      <View style={styles.parent}> 
        <TimeBar/>
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
  loader:{
    width:300,
    height:300,
  },  
  loaderContainer:{
    Height:"100%",
    width:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
