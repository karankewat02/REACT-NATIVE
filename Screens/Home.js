import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import TaskItem from '../Components/TaskItem'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {

    const [task,setTask] = React.useState();
 

    const getAllTasks = async () => {
        
    try {
        const data = await AsyncStorage.getItem('task1');
        if (data) {
            await setTask(JSON.parse(data));
            console.log('task',JSON.parse(data))
        } else {
            setTask([]); 
        }
    } catch (error) {
        console.log('Error getting tasks: ', error);
        return []; 
    }
    }

    React.useEffect(() => {
        getAllTasks();
    },[])
    const navigattion = useNavigation()
  return (
    <View style={{backgroundColor:"#ddd", paddingHorizontal:10}}>
      <Text style={{fontSize:27}}>Welcome user, </Text>

        <View style={{marginVertical:20}}>
        {
        (task == [])?
        <Text>No Task.</Text>
        :
        <FlatList
            data={task}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item,index }) => (
                <TaskItem task = {item.task} keyy={index} done={item.done}/>
            )}
        />
        }
        </View>

      <TouchableOpacity onPress={()=>navigattion.navigate('Add')}>
        <View style={styles.button}>
            <Text style={{color:'white',textAlign:'center',fontSize:18}}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    button:{
        position:'fixed',
        bottom: 0,
        left:0,
        paddingHorizontal: 10,
        paddingVertical:10,
        backgroundColor: 'blue',
        width : '100%',
    }

})