import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import NavBar from '../components/Navbar'
import { MaterialIcons } from '@expo/vector-icons';

const Bookings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <Text style={styles.heading}>Your bookings</Text>
     <View style={styles.bookings}>
    {bookings.map((booking, index)=>( <View key={index} style={styles.booking}>
        <View style={styles.profileIcon}>
        <Image style={styles.icon} source={booking.image}/>
        </View>
        <Text>{booking.name} </Text>
        <Text>{booking.field} </Text>
        <Text>{booking.time} </Text>
        <TouchableOpacity>
        <MaterialIcons name="cancel" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialIcons name="mode-edit" size={24} color="blue" />
        </TouchableOpacity>

      </View>))}
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  paddingTop:16,
},
heading:{
  paddingLeft:8,
  paddingBottom:8,
  fontSize:20,
  fontWeight:'bold'
},
bookings:{

},
booking:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:8,
  marginHorizontal:8,
  borderWidth:1,
  marginVertical:2,
  borderRadius:4,
  backgroundColor:'skyblue',
  borderColor:'yellow'
},
profileIcon:{
height:24,
width:24,
borderRadius:12,
overflow:'hidden'
},
icon:{
  height:24,
width:24,
},

})

const bookings= [{
  name:'Omoding daniel',
  field:'Doctor',
  time:'7 hours',
  image:require('../assets/marketing.jpg')
},
{
  name:'Omoding daniel',
  field:'Lawyer',
  time:'1 hours',
  image:require('../assets/bigchef.jpg')
},
{
  name:'Okello Martin',
  field:'Analyst',
  time:'8 hours',
  image:require('../assets/engineering.jpg')
},
{
  name:'Asio Charity',
  field:'Engineer',
  time:'4 hours',
  image:require('../assets/healthsector.jpg')
},
{
  name:'Opio Marvin',
  field:'Farmer',
  time:'2 hours',
  image:require('../assets/girl-profile.jpg')
},
{
  name:'Akayo Beactrice',
  field:'Teacher',
  time:'5 hours',
  image:require('../assets/nurse.jpg')
}
]
export default Bookings