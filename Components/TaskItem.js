import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskItem = ({task, keyy, done}) => {
    const [isChecked,setChecked] = React.useState(done);

    const taskDone = async (index)=>{
      const data = await AsyncStorage.getItem('task1');
      if (data) {
        var x= JSON.parse(data);
        x[index].done = !isChecked;
        await AsyncStorage.setItem('task1', JSON.stringify(x));
        alert("Task Done successfully")
      } else {
        alert("Error")
      } 
    }

    const deleteTask = async (index)=>{
      const data = await AsyncStorage.getItem('task1');
      // console.log(data)
      if (data) {
        var x= JSON.parse(data);
        if (index >= 0 && index < x.length) {
          x.splice(index, 1);
        }
        await AsyncStorage.setItem('task1', JSON.stringify(x));
        alert("Task deleted successfully")
      } else {
        alert("Error")
      } 
    }


  return (
    <View style={styles.item} > 
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          onChange={()=>taskDone(keyy)}
          color={isChecked ? '#4630EB' : undefined}
          />
        <Text style={{color:isChecked?"#ccc":"#000", marginLeft:5}}>{task?task:"Task Item"}</Text>
      </View>

        <TouchableOpacity onPress={()=>{deleteTask(keyy)}}>
          <View style={styles.button}>
              <Text style={{color:'white',textAlign:'center',fontSize:14}}>Delete</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  item:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:10
  },
  button:{
    paddingHorizontal: 5,
    paddingVertical:5,
    backgroundColor: 'red',
    width : '100%',
}


})