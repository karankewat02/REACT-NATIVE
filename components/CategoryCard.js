import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'

const CategoryCard = (props) => {
  const setState = ()=>{
    props.setParent(props.aryyKey)
  }

  return (
      <TouchableOpacity style={styles.container} onPress={setState}>
      <Image source={
        {uri:`${props.imgURl}`}} 
        resizeMode="contain"
        style={styles.icon}
      />
      <Text style={styles.text}>{props.categoryText}</Text>
      </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:12,
    borderColor:'#ffcb77',
    borderWidth:4,
    borderRadius:50,
    marginVertical:24,
  },
  icon:{
    width:40,
    height:40,
    marginRight:24 ,
  },
  text:{
    fontSize:24,
    marginRight:'auto',
    // textAlign:'center',
  }

})