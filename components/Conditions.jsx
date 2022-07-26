import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'



const Conditions = () => {
  return (
    <View style={styles.terms}>
    <Text>
      By creating an account, you accept Expert Shire's 
      </Text>
     <TouchableOpacity>
      <Text style={styles.textButton}>Terms of Service</Text> 
      </TouchableOpacity> 
     <Text> and </Text>
      <TouchableOpacity>
      <Text style={styles.textButton}>Privacy Policy</Text>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    textButton:{
        color:'skyblue',
      },
      terms:{
        
      }
})
export default Conditions