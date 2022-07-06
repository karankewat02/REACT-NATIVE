import { Dimensions, TouchableOpacity,StyleSheet, Text,Image} from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;



const TrendingFood = (props) => {
  const navigation = props.navigation;

  const navi = ()=>{
      navigation.navigate('Single',{id : props.recipeID});
  }
  return (
    <TouchableOpacity style={styles.trendingImageContainer} onPress={navi}>
        <Image source={{uri:`${props.imgURL}`}} resizeMode='cover' style={styles.trendingImage} />
        <Text style={styles.trendingFoodText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default TrendingFood

const styles = StyleSheet.create({
    
      trendingImage:{
        width:'100%',
        height:80,
      },
      trendingImageContainer:{
        flexBasis: (windowWidth/2)-40,
        marginBottom:16,
        marginHorizontal:8,
        position:'relative',
        overflow:'hidden',
        borderRadius:6,
      },
      trendingFoodText:{
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        padding:6,
        color:'#FFF',
        backgroundColor:'#00000080'
      },
})