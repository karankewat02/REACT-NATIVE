import {ScrollView,Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {firebaseConfig} from '../firebase.config'
import CustomAlert from '../components/CustomAlert'
const Signin = ({navigation}) => {


  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [displayAlert,setDisplayAlert] = useState(false);
  const [alertMsg,setAlertMsg] =useState('');
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handelLogin = (auth,email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      setAlertMsg('Login Success !')
      setDisplayAlert(true);
      
      setTimeout(() => {
        setDisplayAlert(false);
        navigation.navigate('Category')
      }, 2100);
      
    }).catch((err)=>{
      setAlertMsg(err.message)
      setDisplayAlert(true);
      
      setTimeout(() => {
        setDisplayAlert(false);
      }, 2100);
    })
  }

  return (
    <>
    {displayAlert?<CustomAlert msg={alertMsg} />:<></>}
      
      <Image style={styles.bgImg} source={require('../images/signin.png')} resizeMode='cover' />
      <View style={styles.conatiner}>

        <View style={styles.options}>
          <TouchableOpacity>
              <Text style={styles.selectedOption}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('Signup')} >
              <Text style={styles.option}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heroText}>Welcome back</Text>

        <ScrollView>
          <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#ccc"  selectionColor={'#ccc'} value={email} onChangeText={text=>setEmail(text)} />
            <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#ccc"  selectionColor={'#ccc'} secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)} />
          </View>

          <View style={styles.signinContainer}>
            <Text style={{color:"#fe6d73",fontSize:32,marginLeft:24,}}>Sign in</Text>
            <TouchableOpacity style={styles.signinBtn} onPress={()=>{handelLogin(auth,email,password)}}>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity >
              <Text style={styles.forgotpswd}>forgot password?</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  )
}

export default Signin

const styles = StyleSheet.create({
  conatiner:{
    minHeight:'100%',
    position:'relative'
  },
  bgImg:{
    position:'absolute',
    width:'100%',
    zIndex:-1,
  },
  options:{
    marginLeft:"auto",
    flexDirection:'row',
    padding:24,
  },
  option:{
    color:'#fef9ef',
    fontSize:20,
    marginRight:16,
  },
  selectedOption:{
    color:'#fef9ef',
    fontSize:20,
    marginRight:16,
    paddingBottom:4,
    borderBottomWidth:3,
    borderBottomColor:"#fef9ef"
  },
  heroText:{
    fontSize:48,
    padding:24,
    width:'70%',
    marginTop:'5%',
    color:'#fef9ef',
  },
  form:{
    marginTop:'30%',
    padding:'10%',
    paddingLeft:24,
  },
  input:{
    borderBottomWidth:2,
    borderBottomColor:'#cccccc9a',
    fontSize:20,
    marginVertical:10,
    color:'#aaa',
  },
  signinContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  signinBtn:{
    width:80,
    height:80,
    backgroundColor:'#fe6d73',
    borderRadius:80,

    marginRight:24,    
    alignItems:'center',
    justifyContent:'flex-start',
  },
  arrow:{
    fontSize:60,
    color:'#fff',
  },

  forgotpswd:{
    fontSize:16,
    color:'#aaa',
    paddingLeft:24,
    marginTop:'10%'
  }
})