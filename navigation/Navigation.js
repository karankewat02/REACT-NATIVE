import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Entry from '../screens/Entry'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup'
import Category from '../screens/Category'
import Main from '../screens/Main'
import Single from '../screens/Single'


const stack  = createStackNavigator();
const Options = {
    headerShown:false,
}

const Navigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName='Home' screenOptions={Options}>
                <stack.Screen name="Entry" component={Entry} />
                <stack.Screen name="Signin" component={Signin} />
                <stack.Screen name="Signup" component={Signup} />
                <stack.Screen name="Category" component={Category} />
                <stack.Screen name="Main" component={Main} />
                <stack.Screen name="Single" component={Single} />
        </stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigation;