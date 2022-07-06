import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrendingFood from '../components/TrendingFood';
import MainCard from "../components/MainCard";
import FavouriteCard from '../components/FavouriteCard';
import NavigationBar from '../components/NavigationBar';
import Loading from './Loading';
import FavouriteDataLocal from '../screens/LocalDataJSON/Favorite.json';
import MainDataLocal from '../screens/LocalDataJSON/Main.json';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Main = ({navigation, route}) => {


  const API_Key='92b3313e385446268e63ecc6cc61bc69';
  
  const [category,setCategory] = useState([]);
  const [userOption,setUserOption] = useState(false);
  const [menu,setMenu] = useState(false);
  const [loading,setLoading] = useState(false);
  const [favouriteData,setFavouriteData] = useState([]);
  const [mainCardData,setMainCardData] = useState([]);

  
  useEffect(()=>{
    const {category} = route.params;
    setCategory({category})
    getFavourite();
    getMainData();
  },[])

  // useEffect(()=>{

  // },[category])

  const getMainData = async()=>{
      setLoading(true);
      setCategory(route.params.category.value)
      const __category =  route.params.category.value || category;
      let API = __category=='indian'||__category=='italian'||__category=='chinese' ? 
                                                              `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&cuisine=${__category}&number=10` 
                                                              :`https://api.spoonacular.com/food/search?query=${__category}&apiKey=${API_Key}&number=10`


      const res = await fetch(API);
      const data = await res.json();

      __category=='indian'||__category=='italian'||__category=='chinese'? setMainCardData(data.results):
                                                                        setMainCardData(data.searchResults[0].results)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }

  const getFavourite = async()=>{
    setLoading(true);

    const API = `https://api.spoonacular.com/recipes/random?apiKey=${API_Key}&number=4`;
    const res = await fetch(API);
    const data = await res.json();
    setFavouriteData(data.recipes);
    // setFavouriteData(FavouriteDataLocal.recipes); // TODO set as localData change before APK Build
    // console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }


  const toggle = ()=>{
    setUserOption(userOption?false:true); 
  }

  return (
    <>
      {loading?<Loading/>:
      <View style={{paddingHorizontal:24}} onPress={()=>{setMenu(false)}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>{setMenu(true)}}>
              <Image source={
                {uri:'https://cdn.iconscout.com/icon/free/png-128/menu-1850142-1568969.png',}}
                resizeMode='contain'
                style={styles.menuIcon}
                />
            </TouchableOpacity>
              
            <View style={{position:'relative'}}>
              <View style={styles.user}>
                <Text style={{fontSize:18, fontWeight:'600'}}>Karan </Text>
                <TouchableOpacity onPress={toggle}>
                    <Image source={
                      {uri:'https://cdn.iconscout.com/icon/free/png-128/down-arrow-2693184-2234867.png',}}
                      resizeMode='contain'
                      style={styles.menuIcon}
                      />
                </TouchableOpacity>
              </View>
              
              {userOption?
                  <TouchableOpacity style={styles.options} onPress={()=>navigation.navigate('Signin')}>
                    <Text style={{fontSize:18,textAlign:'center',fontWeight:'700',color:'#fff'}}>Logout</Text>
                  </TouchableOpacity>
              :<></>}

            </View>


                  
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{height:Math.trunc(windowHeight)-100,paddingBottom:200,}}>

              <View>
                <Text style={{fontSize:24,paddingVertical:8,fontWeight:'500'}}>Todays trending</Text>
                <View style={styles.trendingFoodContainer}>
                  {favouriteData.map((e)=>{
                    return(
                      <TrendingFood 
                        title={e.title} 
                        key={e.id}
                        recipeID={e.id}
                        imgURL = {e.image} 
                        navigation={navigation}
                      />
                    )
                  })}
                </View>
              </View>

              <View>
                <Text style={{fontSize:24,paddingVertical:8,fontWeight:'500',marginTop:16,}}>Your Category</Text>
                <ScrollView style={styles.main} horizontal={true} nestedScrollEnabled={true}>
                    {mainCardData.map((e)=>{
                      const __category =route.params.category.value;
                      const name = __category=='indian'||__category=='italian'||__category=='chinese'?e.title:e.name;
                      return(
                        <MainCard 
                          name={name} 
                          key={e.id} 
                          recipeID={e.id}
                          category = {route.params.category.value} 
                          imgURL={e.image}
                          navigation={navigation}
                        />
                      )
                    })}

                </ScrollView>
              </View>


              <View>
                <Text style={{fontSize:24,paddingVertical:8,fontWeight:'500',marginTop:16,}}>Your Favourite</Text>

                <View style={styles.main}>
                    <FavouriteCard navigation={navigation}/>
                    <FavouriteCard navigation={navigation}/>
                    <FavouriteCard navigation={navigation}/>
                </View>
              </View>
        </ScrollView>     

        <NavigationBar option='Category' navigation={navigation} />


        {menu?<View style={styles.sideMenu}>
                  <TouchableOpacity onPress={()=>{setMenu(false)}}>
                    <Image source={require('../images/close.png')}
                      resizeMode='contain'
                      style={styles.closeIcon}
                      />
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginHorizontal:12,marginTop:100}} onPress={()=>navigation.navigate('Signin')}>
                    <Text style={{fontSize:24,color:'#fff'}}>Logout</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginHorizontal:12,marginTop:24}} onPress={()=>navigation.navigate('Category')}>
                    <Text style={{fontSize:24,color:'#fff'}}>Change Category</Text>
                  </TouchableOpacity>
        </View>:<></>}

        
      </View>
    }
    </>
  )
}

export default Main

const styles = StyleSheet.create({
  
  header:{
    paddingVertical:16,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  menuIcon:{
    width:32,
    height:32,
  },

  user:{
    flexDirection:'row',
    alignItems:'center',
    borderColor:'#17c3b2',
    borderWidth:3,
    paddingVertical:6,
    paddingHorizontal:20,
    borderRadius:50,
  },    
  trendingFoodContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
  },

  main:{
    maxHeight:300,
  },

  sideMenu:{
    position:'absolute',
    top:0,
    left:0,
    width:windowWidth*(7/10),
    height:windowHeight,
    justifyContent:'flex-start',
    backgroundColor:'#17c3b2',
  },  
  closeIcon:{
    position:'absolute',
    top:16,
    width:40,
    height:40,
    left:windowWidth*(7/10)-56,
  },
  options:{
    width:'100%',
    position:'absolute',
    bottom:-50,
    padding:16,
    paddingVertical:8,
    paddingHorizontal:18,
    borderRadius:50,
    backgroundColor:'#17c3b2',
    borderWidth:3,
    borderColor:'#17c3b2',
    zIndex:10,
  },

})