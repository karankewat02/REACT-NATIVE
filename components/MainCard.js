import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;
const MainCard = (props) => {

  const navigation = props.navigation;
  const category = props.category;
  const navi = ()=>{
      navigation.navigate('Single',{id : props.recipeID,foodCategory : category });
  }

  return (
      <View style={styles.card}>
          <TouchableOpacity onPress={navi}>
            <Image source={{uri:props.imgURL}} resizeMode='cover' style={styles.mainImage} />
          </TouchableOpacity>
          <View style={styles.mainText}>
          <Text style={styles.dish}>{props.name}</Text>
          <Text style={styles.duration}>duration</Text>
          </View>
      </View>
  )
}

export default MainCard

const styles = StyleSheet.create({

  card:{
    marginRight:12,
    borderRadius:6,
    overflow:'hidden',
    position:'relative',
  },
  mainImage:{
    borderRadius:6,
    width:windowWidth-100,
    height:200,
  },
  mainText:{
    position:'absolute',
    bottom:0,
    left:0,
    paddingVertical:8,
    paddingHorizontal:12,
    backgroundColor:"#00000080",
    width:'100%',
  },
  dish:{
    color:'#fff',
    fontSize:20,
    paddingVertical:2,
  },
  duration:{
    color:'#fff8',
    paddingVertical:2,
  },

})