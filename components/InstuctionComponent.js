import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InstuctionComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconConatiner}>
      <Image source={{
                uri : `${props.imageURL}`
                }}
        style={styles.icon}
        resizeMode="contain"
        />
      </View>

      <Text  style={styles.instructionText}>{props.instructionText}</Text>
    </View>
  )
}

export default InstuctionComponent

const styles = StyleSheet.create({

    icon:{
        width:50,
        height:50,
    },

    iconConatiner:{
        padding:5,
        backgroundColor:'#D9D9D9',
        borderRadius:5,
        width:60,
        height:60,
        marginRight:10,
        marginVertical:'5%'
    },
    instructionText:{
      width:'80%',
      fontSize:18,
    },
    container:{
        flexDirection:'row',
        alignItems:'center'
    }
})