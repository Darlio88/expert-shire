import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const imageSource=require('../assets/girl-profile.jpg')
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer} >
      <View style={styles.profilepic}>
      <Image style={styles.profile} source={imageSource}/>
      </View>
      <View style={styles.initials}>
      <Text style={styles.name}>Amoding Beactrice</Text>
      <View style={styles.location}>
      <Entypo name="location-pin" size={24} color="white" />
      <Text style={styles.locationName} >Kampala, Uganda</Text>
      </View>
    <TouchableOpacity style={styles.logoutButton}  onPress={()=>navigation.navigate('Signin')}>
      <Text style={styles.logOutButtonText}>Log Out</Text>
    </TouchableOpacity>
      </View>
      </View>
     <View style={styles.lowerContainer}>
      <View style={styles.phoneContainer}>
     <View style={styles.phoneArea}>
      <TouchableOpacity>
      <Feather name="phone" size={24} color="green" />
      </TouchableOpacity>
      <View>
      <Text >+256785124779</Text>
      <Text style={styles.phone}>work</Text>
      </View>
      <TouchableOpacity>
      <MaterialIcons name="message" size={24} color="gray" />
      </TouchableOpacity>
     </View>
     <View style={styles.phoneArea}>
      <TouchableOpacity>
      <Feather name="phone" size={24} color="green" />
      </TouchableOpacity>
     <View>
     <Text>+256785124779</Text>
      <Text style={styles.phone}>mobile</Text>
     </View>
    <TouchableOpacity>
    <MaterialIcons name="message" size={24} color="gray" />
    </TouchableOpacity>
     </View>
      </View>
      <View style={styles.phoneContainer}>
     <View style={styles.emailArea}>
      <TouchableOpacity>
      <Feather name="mail" size={24} color="green" />
      </TouchableOpacity>
      <View>
      <Text >darliospeakcash@gmail.com</Text>
      <Text style={styles.phone}>Personal</Text>
      </View>
     </View>
     <View style={styles.emailArea}>
      <TouchableOpacity>
      <Feather name="mail" size={24} color="green" />
      </TouchableOpacity>
     <View>
     <Text>danieldarlio01@gmail.com</Text>
      <Text style={styles.phone}>work</Text>
     </View>
     </View>
      </View>
     </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
    paddingTop:24,
    flex:1
  },
  upperContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'skyblue'
  },
  profilepic:{
    height:150,
    width:150,
    overflow:'hidden',
    borderRadius: 75,
    borderColor:'white',
    borderWidth:1,
    elevation:5
  },
  profile:{
    height:150,
    width:150,
    resizeMode:'stretch'
  },
  initials:{
    marginTop:12,
    justifyContent:'space-around',
    alignItems:'center'
  },
  name:{
fontSize:18,
fontWeight:'bold',
marginBottom:4,
color:'white',
  },
  location:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  locationName:{
    color:'white',
  },
  lowerContainer:{
    flex:1,
    padding:4
  },
  phoneContainer:{
padding:10,
marginTop:8,
elevation:2,
borderRadius:10
  },
  phone:{
    color:'gray',

  },
  phoneArea:{
    padding:8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
  },
  emailArea:{
    padding:8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
  }
,
logoutButton:{
  marginTop:10,
  backgroundColor:'red',
  paddingVertical:8,
  paddingHorizontal:20,
  elevation:5,
  borderWidth:1,
  borderColor:'white',
  borderRadius:20
},
logOutButtonText:{
  color:'white',
  fontSize:16,
  fontWeight:'bold',
  textTransform:'capitalize'
}
})

export default Profile