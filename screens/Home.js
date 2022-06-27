import { Image , StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText={'Quizzler'}/>
      <View style={styles.bannerContainer}>
        <Image source={{
                uri : 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png'
                }}
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{navigation.push('Instruction')}}  style={styles.button}>
             <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
// navigation.goBack()

export default Home

const styles = StyleSheet.create({
  container:{
    height:'100%'
  },
  banner:{
    height:300,
    width:300,
  },
  bannerContainer:{
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  },
  buttonContainer:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20,
  },
  button:{
      backgroundColor:'#1A759F',
      width:'40%',
      padding:10,
      textAlign:"center",
      borderRadius:20,  
  },
  buttonText:{
    fontSize:16,
    color:"white",
    fontSize:24,
    textAlign:'center',
  }

})