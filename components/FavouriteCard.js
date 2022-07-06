import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FavouriteCard = (props) => {
  const navigation = props.navigation;

  const navi = ()=>{
      navigation.navigate('Single');
  }

  return (
    <View style={styles.card}>
      <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/food-3280751-2810124.png'}} resizeMode='cover' style={{width:100,height:100,borderRadius:10,}} />

      <TouchableOpacity style={{marginLeft:16,}} onPress={navi}>
        <Text style={{fontSize:20,color:'#fff',fontWeight:'500'}}>Name of Dish</Text>
        <Text style={{fontSize:16,color:'#fffa',}}>Duration</Text>
      </TouchableOpacity>

        <TouchableOpacity style={{marginLeft:'auto'}}>
          <Image source={{uri:'https://cdn.iconscout.com/icon/free/png-128/delete-3959571-3278103.png'}} resizeMode='contain' style={{width:30,height:30,}} />
        </TouchableOpacity>
    </View>
  )
}

export default FavouriteCard

const styles = StyleSheet.create({
  card:{
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    marginVertical:16,
    backgroundColor:'#ffcb77',
    paddingVertical:12,
    paddingHorizontal:16,
    borderRadius:10,
  }
})