import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Conditions from '../components/Conditions'
import Logo from '../components/Logo'

const Signin = ({navigation}) => {
  return (
    <View style={styles.container} >
      <View style={styles.logoContainer}>
      <Logo />
      <Text style={styles.title}>Log into your account</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
        style={styles.textInput}
        placeholder='Email required'
        placeholderTextColor='yellow'
        />
        <TextInput
        secureTextEntry
        style={styles.textInput}
        placeholderTextColor='yellow'
        placeholder='Password required'
        />
        <TouchableOpacity >
      <Text style={styles.textButton}>Forgot password?</Text>
      </TouchableOpacity>
      </View>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Tabs')}>
  <Text style={styles.loginButton}>LOG IN</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
      <Text style={styles.textButton}>Don't have an account? sign up</Text>
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
  borderRadius:8,
  width:'98%',
  overflow:'hidden',
  paddingHorizontal:24,
  paddingVertical:8,
  justifyContent:'center',
  alignItems:'center',
  elevation:5,
  borderWidth:1,
  borderColor:'skyblue'
},
loginButton:{
  fontSize:16,
  fontWeight:'bold',
  color:'skyblue'

}
})
export default Signin