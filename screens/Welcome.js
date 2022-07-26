import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import NormalButton from '../components/NormalButton';
import Logo from '../components/Logo';
import Conditions from '../components/Conditions';


const Welcome = () => {
  return (
    <View style={styles.container}>
    <Logo /> 
        <View style={styles.authArea}>
       <View style={styles.googleButton} >
     <NormalButton 
     icon="google"
     buttonTitle='continue with google' 
     />
     
      </View>
     <View style={styles.linkedinButton} >
     <NormalButton  
      icon="linkedin"
     buttonTitle='continue with LinkedIn' 
     />
     </View>
      <View style={styles.emailButton} >
      <Button  
      title='Login with Email'
      />
      </View>
     
    </View>
    <View>
   <TouchableOpacity>
     <Text style={styles.textButton}>New to Expert Shire?  Create Account</Text>
    </TouchableOpacity>
    </View>
  <Conditions />
   
    <StatusBar style="auto" />
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      paddingVertical:16,
      paddingHorizontal:8,
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
   authArea:{
    },
    googleButton:{
      margin:8,
    },
    linkedinButton:{
      margin:8,
    },
    emailButton:{
  margin: 8,
    },
    textButton:{
      color:'skyblue',
    },
  });
  

export default Welcome