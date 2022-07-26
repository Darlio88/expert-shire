import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Welcome from "./screens/Welcome";
import Signin from './screens/Signin'
import Signup from './screens/Signup'

import Home from './screens/Home';
import Tabs from './navigation/Tabs'

const Stack =createNativeStackNavigator();
export default function App() {
  return (
  <NavigationContainer
  >
    <Stack.Navigator 
     screenOptions={
      {headerShown: false,}
     }
    initialRouteName='Tabs'>
      <Stack.Screen name='Tabs' component={Tabs} />
      <Stack.Screen name='Welcome' component={Welcome }/>
      <Stack.Screen name='Signin' component={Signin }/>
      <Stack.Screen name='Signup' component={Signup }/>
      <Stack.Screen name='Home' component={Home }/>
    </Stack.Navigator>
    
  </NavigationContainer>
  );
}

