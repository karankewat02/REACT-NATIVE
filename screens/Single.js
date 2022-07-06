import {Dimensions ,Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import localDATA from './temp.json'

import NavigationBar from '../components/NavigationBar';
import Loading from './Loading';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Single = ({navigation,route}) => {
  
  const [recipeID,setRecipeID] = useState();
  const [recipe,setRecipe] = useState(localDATA);
  const [loading,setloading] = useState(false);

  const {foodCategory} = route.params

  useEffect(()=>{
    const {id} = route.params;
    setRecipeID(id);
  } ,[])

  useEffect(()=>{
    getData();
  },[recipeID])


  const getData = async()=>{
    setloading(true)
    const API = `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=92b3313e385446268e63ecc6cc61bc69`;
    const res = await fetch(API);
    const data = await res.json();
    await setRecipe(data);
    setTimeout(()=>{
      setRecipe(data);
    },1000);
    console.log(recipe)
    setloading(false)
  }

  return (
    <>
    {loading? <Loading/>:
    <View>
      <View style={{borderBottomColor:'#17c3b2',borderBottomWidth:3}}>
          <Image source={{uri:recipe.image}}
                          resizeMode='cover'
                          style={styles.bannnerImg}
          />
      </View>


      <View style={{paddingHorizontal:16,}}>

          <Text style={styles.heading}>{recipe.title}</Text>
          <Text style={{fontSize:16,opacity:.7,}}>Duration : {recipe.readyInMinutes} min</Text>

          <ScrollView style={{marginTop:16,marginBottom:'20%',paddingBottom:100, height:windowHeight-400}} scrollEnabled={true} showsVerticalScrollIndicator={false}>
              <Text style={{fontSize:18,marginBottom:8,color:'#444'}}>Ingerdients</Text>

              {recipe.extendedIngredients.map((e,index)=>{
                return(<Text key={e.id} style={{fontSize:16}}>{index+1}. {e.nameClean}/{e.original} | Quantity {e.measures.metric.amount}{e.measures.metric.unitShort} {'\n'}</Text>
                )})}

              
              <Text style={{fontSize:18,marginBottom:8,color:'#444'}}>Recipe </Text>
              <Text style={{fontSize:16}}>{recipe.summary} {'\n'} {recipe.instructions}</Text>

              <Text style={{fontSize:18,marginVertical:8,color:'#444'}}>Steps</Text>
              {recipe.analyzedInstructions[0].steps.map((e)=>{
                return(<Text key={e.number} style={{fontSize:16}}>{e.number}.  {e.step}{'\n'}</Text>
                )})}
          </ScrollView>

      </View>
      <NavigationBar option='Main' category = {foodCategory} navigation={navigation}/>
    </View>
    }
  </>
  )
}

export default Single

const styles = StyleSheet.create({
  bannnerImg:{
    width:'100%',
    height:250,
  },
  heading:{
    fontSize:24,
    fontWeight:'600',
    marginTop:8,
    color:'#444',
  }
})