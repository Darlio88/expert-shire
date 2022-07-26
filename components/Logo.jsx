import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const Logo = () => {
  return (
    <View style={styles.logoArea}>
      <Image 
    style={styles.logo} 
    source={require('../assets/logo.png')}
    />
    <Text style={styles.slogan}>information at your comfort!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    logoArea:{
        paddingTop: 24,
        alignItems: 'center',
      },
    logo:{
        height: 50,
        width:200,
        resizeMode: 'contain',
        borderRadius: 16,
      },
      slogan:{
        paddingTop:10,
        color:'gray',
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight:'100'
      },
})
export default Logo