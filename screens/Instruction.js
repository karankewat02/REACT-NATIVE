import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import InstuctionComponent from '../components/InstuctionComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Instruction = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <Title titleText = {'Before you start'} />

        <View style={styles.instructionContainer}>
            <InstuctionComponent 
                instructionText={'There will total of 10 question to attempt, with a max score of 100.'}  
                imageURL = {'https://cdn.iconscout.com/icon/free/png-128/checklist-report-1914577-1622039.png'}
            />
            <InstuctionComponent 
                instructionText={'Each question carry 10 marks.'}  
                imageURL = {'https://cdn.iconscout.com/icon/premium/png-128-thumb/score-1989304-1685171.png'}
            />
            <InstuctionComponent 
                instructionText={'In order to pass your total score needs to be 40 or more.'}  
                imageURL = {'https://cdn.iconscout.com/icon/premium/png-128-thumb/result-1700477-1445225.png'}
            />
            <InstuctionComponent 
                instructionText={'If your score is 30 or less than then you fail the quiz.'}  
                imageURL = {'https://cdn.iconscout.com/icon/premium/png-128-thumb/result-1700380-1445288.png'}
            />
            <InstuctionComponent 
                instructionText={'You can skip any question it will be counted as 0.'}  
                imageURL = {'https://cdn.iconscout.com/icon/premium/png-128-thumb/skip-forward-3790712-3166741.png'}
            />
            <InstuctionComponent 
                instructionText={'There is no negetive marking .'}  
                imageURL = {'https://cdn.iconscout.com/icon/free/png-128/cancel-1534469-1300531.png'}
            />
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{navigation.push('Quiz')}}  style={styles.button}>
             <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Instruction

const styles = StyleSheet.create({

  conatiner:{
    padding:10,
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
  },
  instructionContainer:{
    flexBasis:'80%'
  },
  buttonContainer:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20,
  },
  button:{
      backgroundColor:'#1A759F',
      minWidth:'40%',
      padding:10,
      textAlign:"center",
      borderRadius:20,  
  },
  buttonText:{
    color:"white",
    fontSize:24,
    textAlign:'center',
  }
})