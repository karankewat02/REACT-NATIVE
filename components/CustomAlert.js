import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


const CustomAlert = (props) => {

    const [active,setActive] =useState(true);
    const [displayAlert,setDisplayAlert] = useState(false);
    const [alertMsg,setAlertMsg] =useState('');

    useEffect(()=>{
        setActive(true);
        setTimeout(()=>{
            setActive(false)
        },2000)
    },[])


   return (
    <>
        {active?
            <View style={{position:'absolute',width:'100%',height:'100%',alignItems:'center'}}>
                <View style={styles.alertBody}>
                  <Text style={{color:"#FFF",fontSize:18,textAlign:'center'}}>{props.msg}</Text>
                </View>
            </View>
        :<></>}
    </>
  )
}

export default CustomAlert

const styles = StyleSheet.create({
    alertBody:{
        marginTop:"5%",
        zIndex:10,
        backgroundColor:'#333333',
        maxWidth:'70%',
        padding:12,
        borderRadius:4,
        borderBottomColor:"#00bfa5",
        borderBottomWidth:8,
    }
})