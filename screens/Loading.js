import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
      <Image
        source={{uri:'https://cdn3d.iconscout.com/3d/premium/thumb/cooking-pan-3311566-2754876@0.png'}}
        resizeMode='contain'
        style={{width:200,aspectRatio:1}}
      />
      <Text style={{fontSize:24,}}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})