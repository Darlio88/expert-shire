import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AntDesign } from '@expo/vector-icons';

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Bookings from '../screens/Bookings'

const Tab = createBottomTabNavigator()
const Tabs = () => {
  return (
   <Tab.Navigator 
   screenOptions={
    {
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle:{backgroundColor:'skyblue'},
        tabBarInactiveTintColor:'yellow',
        tabBarActiveTintColor: 'white'
        

    }
    
   }
   >
    <Tab.Screen name='Home' component={Home} 
    options={{
        tabBarIcon: ({color, size})=> (<AntDesign name="home" size={24} color={color} />)
    }}
    />
    <Tab.Screen name='Bookings' component={Bookings} 
      options={{
        tabBarIcon: ({color, size})=> (<AntDesign name="book" size={24} color={color} />),
        tabBarBadge:3,
        tabBarBadgeStyle:{backgroundColor:'yellow',color:'gray'}
    }}
    />
    <Tab.Screen name='Profile' component={Profile} 
      options={{
        tabBarIcon: ({color, size})=> (<AntDesign name="user" size={24} color={color} />)
    }}
    />
   </Tab.Navigator>
  )
}

export default Tabs