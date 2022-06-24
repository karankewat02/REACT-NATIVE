import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = (props) => {
  return (
    <View >
      <Text style={styles.title}>{props.titleText}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({

  title:{
    fontSize:40,
    fontWeight:"600",
    padding:10,
    textAlign:'center',
  },

})