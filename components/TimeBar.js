import { Animated, Dimensions ,StyleSheet , View } from 'react-native'
import React from 'react'



const position = new Animated.ValueXY({x:0,y:0})
const TimeBar = () => {
  
  const deviceWidth = Dimensions.get('window').width;
  Animated.loop(
    Animated.timing(position,{
      toValue:{x:-deviceWidth,y:0},
      duration:15000,
      useNativeDriver:true,
    })
  ).start()

  return (
      <Animated.View style={styles.timeBar}></Animated.View>
  )
}

export default TimeBar

const styles = StyleSheet.create({

    timeBar:{
        position:'absolute',
        top:0,
        left:-15,
        width:'105%',
        height:10,
        backgroundColor:'#1e6091',  
        marginVertical:5,   
        transform:[
          {translateX:position.x}
        ]  
    }
})