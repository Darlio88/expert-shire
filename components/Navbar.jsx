import { View, Text, Image,StyleSheet} from 'react-native'
import React from 'react'



const Navbar = () => {
  return (
    <View style={styles.navContainer}>
      <View>
      <View style={styles.logoContainer}>
        <Image 
        source={require('../assets/logo.png')}
        style={styles.logo}
        />
        </View>
      <Text style={styles.logoText}>information at your comfort</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image style={styles.profile} source={require('../assets/girl-profile.jpg')} />
      </View>
    </View>
  )
}


const styles=StyleSheet.create({
    navContainer:{
    padding:10,
    elevation:4,
    flexDirection:'row',
    justifyContent: 'space-between',
    },
    profileContainer:{
      height:60,
      width:60,
      backgroundColor:'black',
      borderRadius:30,
      overflow:'hidden',
      marginRight:4

    },
      profile:{
      height:60,
      width:60,
      
      resizeMode:'contain'
    },
    logoContainer:{
        height: 60,
        width:240,
        overflow:'hidden',
        borderRadius:16,
    },
logo:{
    height: 60,
    width:240,
    resizeMode:'contain'
},
logoText:{
    fontSize:12,
    fontStyle:'italic',
    alignSelf:'center',
    color:'skyblue',
}
})
export default Navbar