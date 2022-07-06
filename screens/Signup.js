import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomAlert from '../components/CustomAlert'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {firebaseConfig} from '../firebase.config'


const Signup = ({navigation}) => {

  // const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [displayAlert,setDisplayAlert] = useState(false);
  const [alertMsg,setAlertMsg] =useState('');
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handelSignup = ()=>{
      createUserWithEmailAndPassword(auth,email,password)
      .then(userCredentials => {
        setAlertMsg('Registration Success !')
        setDisplayAlert(true);
        setTimeout(() => {
        setDisplayAlert(false);
          navigation.navigate('Signin')
        }, 2100);
      })
      .catch((err)=>{
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
      <Image style={styles.bgImg} source={require('../images/signup.png')} resizeMode='cover' />
      <View style={styles.conatiner}>
        <View style={styles.options}>
          <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
              <Text style={styles.option}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity >
              <Text style={styles.selectedOption}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heroText}>Create Account</Text>

        <View style={styles.form}>
          {/* <TextInput style={styles.input} placeholder='Name' placeholderTextColor="#eee"  selectionColor={'#eee'} value={name} onChangeText={text=>setName(text)}/> */}
          <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#eee"  selectionColor={'#eee'} value={email} onChangeText={text=>setEmail(text)} />
          <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#eee"  selectionColor={'#eee'} secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)} />
        </View>

        <View style={styles.signinContainer}>
          <Text style={{color:"#888",fontSize:32,marginLeft:24,}}>Sign up</Text>
          <TouchableOpacity style={styles.signinBtn} onPress={()=>{handelSignup(email,password)}} >
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Signup

const styles = StyleSheet.create({
  conatiner:{
    minHeight:'100%',
    position:'relative'
  },
  bgImg:{
    position:'absolute',
    // top:-64,
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
    marginTop:'15%',
    color:'#fef9ef',
  },
  form:{
    marginTop:'10%',
    padding:'10%',
    paddingLeft:24,
  },
  input:{
    borderBottomWidth:2,
    borderBottomColor:'#cccccc9a',
    fontSize:20,
    marginVertical:10,
    color:'#fff',
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
    position:'relative',
    marginRight:24,    
  },
  arrow:{
    fontSize:60,
    color:'#fff',
    position:'absolute',
    top:40,
    left:40,
    transform:[{translateY:-40},{translateX:-25}]    
  },

  forgotpswd:{
    fontSize:16,
    color:'#aaa',
    paddingLeft:24,
    marginTop:'10%'
  }
})