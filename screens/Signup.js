import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Conditions from '../components/Conditions'
import Logo from '../components/Logo'

const Signup = ({navigation}) => {
  return (
    <View style={styles.container} >
      <View style={styles.logoContainer}>
      <Logo />
      <Text style={styles.title}>Create a new account</Text>
      </View>
      <View style={styles.formContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Full name(required) '
        placeholderTextColor='yellow'
        />
        <TextInput
        style={styles.textInput}
        placeholder='Email (required)'
        placeholderTextColor='yellow'
        />
        <TextInput
        secureTextEntry
        style={styles.textInput}
        placeholder='Password (required)'
        placeholderTextColor='yellow'
        />
         <TextInput
        secureTextEntry
        style={styles.textInput}
        placeholder='Confirm Password'
        placeholderTextColor='yellow'
        />
     
       
      </View>
    
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Tabs')}>
  <Text style={styles.loginButton}>CREATE A NEW ACCOUNT</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
  <Text style={styles.textButton}>Already have account? Log in</Text>
  </TouchableOpacity>

     <Conditions />
    </View>
  )
}
const styles = StyleSheet.create({
container:{
  justifyContent:'space-around',
  alignItems: 'center',
  flex:1,
  padding:16,
  paddingBottom:20,
},
logoContainer:{
alignItems: 'center',
},
title:{
  marginTop:12,
  fontSize:20,
  fontWeight:'bold',
},
formContainer:{
  alignItems: 'flex-end',
  width:'100%',
  paddingEnd:4,
  paddingHorizontal:8,
},
textInput:{
  margin:8,
  borderRadius: 8,
  flexDirection: 'row',
  borderWidth:1,
  borderColor:'yellow',
  backgroundColor:'skyblue',
  paddingVertical:8,
  paddingHorizontal:12,
  width:'100%',
  color:'white'
},
textButton:{
  marginTop:4,
  color:'skyblue'
},

button:{
  backgroundColor:'yellow',
  borderRadius:12,
  overflow:'hidden',
  width:'98%',
  paddingHorizontal:24,
  paddingVertical:8,
  elevation:5,
  alignItems:'center',
  borderWidth:1,
  borderColor:'skyblue'
},
loginButton:{
  fontSize:16,
  fontWeight:'bold',
  color:'skyblue'

}
})
export default Signup