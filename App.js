import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './navigation/Navigation' 

const App = ({navigation}) => {
  return (
      <Navigation/>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        paddingHorizontal:16
    }

})