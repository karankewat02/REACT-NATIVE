import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTask = () => {

    const [task,setTask] = React.useState('');
    const navigation = useNavigation();

    const addTask = async (task)=>{
        // getData()
        try {
            const data = await AsyncStorage.getItem('task1');
            let taskList = data ? JSON.parse(data) : [];
            console.log(taskList);
            taskList.push(task);
            await AsyncStorage.setItem('task1', JSON.stringify(taskList));
            alert("Task added successfully")
            console.log('Data stored successfully.');
            navigation.navigate('Home');
          } catch (error) {
            alert("Error")
            console.error('Error storing data: ', error);
          }
    }
  return (
    <View style={{backgroundColor:"#ddd"}}>
      <Text style={{fontSize:16}}>Create Task </Text>
      <TextInput
        style={styles.input}
        onChangeText={setTask}
        value={task}
        placeholder="Enter your task"
        keyboardType='default'
      />
      
      <Pressable onPress={()=>{addTask({task:task, done: false})}}>
        <View style={styles.button}>
            <Text style={{color:'white'}}>Add Task</Text>
        </View>
      </Pressable>

    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    input: {
        borderColor:"black",
        borderWidth:2,
        margin:4,
    },
    button:{
        paddingHorizontal: 10,
        paddingVertical:5,
        backgroundColor: 'blue'
    }
})