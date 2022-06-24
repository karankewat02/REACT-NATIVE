import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/Title';
const Home = ({navigation, route}) => {
  const {score} = route.params;
  const resultBanner = score>30?
    "https://cdni.iconscout.com/illustration/premium/thumb/businessman-with-victory-trophy-4819004-4010292.png"
    :"https://cdni.iconscout.com/illustration/premium/thumb/businessman-falling-due-to-business-failure-5627313-4688102.png";
  return (
    <View style={styles.container}>
      <Title titleText={'Result'} />
      <Text style={styles.scoreTitle}>Your score </Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Home');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
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
  scoreTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffd900cc',
    marginTop: 20,
  },
  score: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
    color: '#FFD700',
  },
});
