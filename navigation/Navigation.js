import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Quiz from '../screens/Quiz'
import Result from '../screens/Result'
import PreResult from '../screens/PreResult'


const stack  = createStackNavigator();
const Options = {
    headerShown:false,
}

const Navigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName='Home' screenOptions={Options}>
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="Quiz" component={Quiz} />
                <stack.Screen name="Result" component={Result} />
                <stack.Screen name="PreResult" component={PreResult} />
        </stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation;