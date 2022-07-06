import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Entry = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signin');
    }, 2000);
  }, []);

  return (
    <View style={styles.imgContainer}>
      <Image style={styles.img} source={require('../images/cravingBowlLogo.png')}
        resizeMode='contain'  
      />
      <Text style={styles.text}>Craving Bowl</Text>
    </View>
  )
}

export default Entry

const styles = StyleSheet.create({
  imgContainer:{
    justifyContent:'center',
    alignItems:'center',
    minHeight:'100%',
  },

  img:{
    width:'50%',
    height:'50%',
  },

  text:{
    fontSize:32,
    fontWeight:'700',
    position:'absolute',
    bottom:-50,
    bottom:200,
  }

})