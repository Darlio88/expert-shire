import React from 'react'
import { TouchableOpacity, View,Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const NormalButton = ({icon, buttonTitle}) => {
  return (
  <TouchableOpacity>
    <View style={styles.normalButton}>
    <FontAwesome name={icon} size={24} color="black" />
    <Text style={styles.buttonText}>{buttonTitle}</Text>
    </View>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  normalButton:{
    borderRadius: 8,
    flexDirection: 'row',
    borderWidth:1,
    padding:12,
    alignContent:'center',
    justifyContent: 'center',
    width:'100%'
  },
  buttonText:{
    paddingLeft:8,
    fontSize:16,
    fontWeight:'bold'


  }
})

export default NormalButton