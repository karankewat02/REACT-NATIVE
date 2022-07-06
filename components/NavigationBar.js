import {Dimensions,Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const NavigationBar = (props) => {

    const [option,setOption] = useState('');
    useEffect(() => {
      setOption(props.option)
    }, []);

    const navigation = props.navigation;
    const category = props.category;

    
    const navi = ()=>{
      category?navigation.navigate('Main',{category : category}):navigation.navigate(option);
    }

    const imgURL = option==='Category'?'https://cdn.iconscout.com/icon/free/png-128/swap-call-tool-swapping-32120.png'
    :'https://cdn.iconscout.com/icon/free/png-128/home-2456658-2036112.png'
  return (
    <View style={styles.navigationMenu}>
        <TouchableOpacity style={styles.button} onPress={navi}>
          <Image source={{uri:imgURL}}
                  resizeMode='contain'
                  style={{width:40,height:40,}}
          />
        </TouchableOpacity>
    </View>  
  )
}

export default NavigationBar

const styles = StyleSheet.create({
    navigationMenu:{
        position:'absolute',
        top:Math.trunc(windowHeight)-80,
        width:windowWidth,
        height:85,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#227c9d',
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
      },
    
      button:{
          width:80,
          height:80,
          backgroundColor:'#fe6d73',
          borderRadius:80,
          position:'relative',
          top:-40, 
          justifyContent:'center',
          alignItems:'center',
      },
})