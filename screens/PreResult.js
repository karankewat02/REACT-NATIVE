import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/Title';
const Home = ({navigation, route}) => {
  const {score} = route.params;


  const exithandler = () =>{
    navigation.navigate('Result',{
      score: score
    })
  }
    
  return (
    <View style={styles.container}>
      <Title titleText={'Quiz Finished'} />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/woman-winning-and-cross-the-finish-line-of-a-marathon-5520937-4609295.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={exithandler}
          style={styles.button}>
          <Text style={styles.buttonText}>See Result</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// navigation.goBack()

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  banner: {
    minWidth: 450,
    minHeight: 300,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1A759F',
    width: '40%',
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },

});


