import {TouchableOpacity, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import CategoryData from './Category.json'


const Category = ({navigation}) => {

  const [selected,setSelected] = useState(99);

  return (
    <View style={{justifyContent:'space-evenly',alignItems:'center',minHeight:'100%',}}>
      <Image style={styles.bgImg} source={require('../images/category.png')} resizeMode='cover' />
      <Text style={styles.heading}>Categories Selected : {selected==99?'None':CategoryData[selected-1].name}</Text>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {CategoryData.map((e)=>{
          return(
            <CategoryCard 
              imgURl={e.iconURL} 
              categoryText={e.name} 
              key={e.key} 
              aryyKey={e.key} 
              setParent={select=>setSelected(select)}
            />
          ) 
        })}
      </ScrollView>
      {selected==99?<></>:
        <TouchableOpacity style={styles.signinBtn} onPress={()=>navigation.navigate('Main',{category : CategoryData[selected-1]})}>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      }
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  heading:{
    fontSize:42,
    textAlign:'center',
    marginVertical:"5%",
    color:'#fe6d73',
    marginBottom:'auto',
  },

  bgImg:{
    position:'absolute',
    width:'100%',
    height:'100%',
    zIndex:-1,
  },
  scroll:{
    width:'80%',
    marginTop:'20%',
  },
  signinBtn:{
    width:80,
    height:80,
    backgroundColor:'#17c3b2',
    borderRadius:80,
    position:'absolute',
    right:24,
    bottom:32,  
    alignItems:'center',
    justifyContent:'center',
    zIndex:5,
  },
  arrow:{
    fontSize:60,
    color:'#fff',
    transform:[{translateY:-10}]    
  },

})