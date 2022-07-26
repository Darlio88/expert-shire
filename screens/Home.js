import { View, 
  Text, 
  FlatList, 
  StyleSheet,
  TextInput, 
  Image,  
  TouchableOpacity,
  ScrollView 
 } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import NavBar from '../components/Navbar'


const fields =[
    {field: 'electrician', icon:'home'},
    {field: 'driver', icon:'hat'},
    {field: 'farmer', icon:'circle'},
    {field: 'police', icon:'user'},
    {field: 'developer', icon:'user'},
    {field: 'Chef', icon:'fire'},
    {field: 'Lecturer', icon:'car'},
    {field: 'teacher', icon:'cart'},
    {field: 'pilot', icon:'users'},
    {field: 'surveyor', icon:'book'}
]
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <NavBar />
      
      <View style={styles.exploreContainer}>
      <Text style={styles.subtitle}>Explore</Text>
      <View style={styles.textInput} >
      <AntDesign name="search1" size={20} color='yellow' />
      <TextInput 
       style={styles.input}
      placeholder='Search for experts....'
      placeholderTextColor='yellow'

      />
      
      </View>
     
      <FlatList 
      horizontal={true}
      data={fields}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(<Text style={styles.fields}>{item.field}</Text>)}
      keyExtractor={(item)=>item.field}
      />
      </View>
      <View>
      <Text style={styles.subtitle}>Trending Experts</Text>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
        {images.map((expert, index) =>(
      <View key={index} style={styles.card}>
     <View style={styles.imageCard}>
     <Image 
      source={expert.image}
      style={styles.picImage}
      />
     </View>
     <View style={styles.cardBottom}>
     <View style={styles.nameContainer}>
     <Text style={styles.name}>{expert.name}</Text>
      <Text style={styles.catergory}>{expert.field}</Text>
     </View>
      <Text style={styles.cost}>{expert.cost}</Text>
       
        <TouchableOpacity style={styles.buttonArea}>
        <Text style={styles.button}>Book Now</Text>
        </TouchableOpacity>
      </View>
    
      <View>
     </View>
    

      </View>))}

      </ScrollView>
     
      </View>
      
     
      </ScrollView>

    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    marginTop:16,
  },
    exploreContainer:{
      marginBottom:8,
    },
    subtitle:{
        marginLeft:8,
        paddingTop:8,
        fontSize:16,
        marginBottom:8,
        fontStyle:'italic',
        fontWeight:'bold',
    },
    textInput:{
        margin:8,
        borderRadius: 16,
        flexDirection: 'row',
        borderWidth:1,
        borderColor: 'yellow',
        paddingVertical:8,
        paddingHorizontal:12,
        width:'80%',
        alignItems: 'center',
        backgroundColor:'skyblue',
      },
input:{
    marginLeft:4,
    color:'white'
      },
fields:{
    fontSize:14,
    padding:8,
    marginTop:12,
    marginLeft:8,
    color:'yellow',
    backgroundColor:'skyblue',
    fontWeight:'bold',
    borderWidth:1,
    borderRadius:16,
    borderColor:'skyblue',
    borderColor:'yellow'
},
button:{
},
card:{
  height:400,
  width:'80%',
  elevation:2,
  justifyContent:'space-between',
  alignItems:'center',
  margin:8,
  borderRadius:12,
  borderWidth:1,
  borderColor:'skyblue',
},
imageCard:{
  height:'60%',
  width:'100%',
  overflow:'hidden'
},
picImage:{
  height:'100%',
  width:'100%',
resizeMode:'stretch'
},
cardBottom:{
  paddingTop:8,
  justifyContent:'space-between',
  height:'40%',
  width:'100%',
  padding:8,
},
nameContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:4,
},
name:{
  color:'gray',
  fontSize:18,
  fontStyle:'italic',
  fontWeight:'bold',
},
catergory:{
  fontWeight:'100',
  fontSize:14,
  color:'gray',
},
cost:{
  color:'gray',
  fontSize:16,
},
actionButtons:{
  flexDirection:'row',
  justifyContent:'space-between',

},
buttonArea:{
  justifyContent:'center',
  alignItems:'center',
padding:10,
backgroundColor:'yellow',
borderWidth:1,
borderColor:'skyblue',
borderRadius:16,
elevation:4,
marginBottom:8,
},
button:{
color:'skyblue',
fontWeight:'bold',
fontSize:16,

}
})


const images= [
  {
  image:require('../assets/healthsector.jpg'),
  name:'Omoding Daniel',
  field: 'Engineer',
  cost:'Ug.Shs 10000/hr'
},
{
  image:require('../assets/farming.jpg'),
  name:'Opio Marvin',
  field: 'Farmer',
  cost:'Ug.Shs 1000/hr'
},
{
  image:require('../assets/engineering.jpg'),
  name:'Asiimwe Urnest',
  field: 'Surveyor',
  cost:'Ug.Shs 6000/hr'
},
{
  image:require('../assets/bigchef.jpg'),
  name:'Egadu Steven',
  field: 'Driver',
  cost:'Ug.Shs 2000/hr'
},
{
  image:require('../assets/nurse.jpg'),
  name:'Apolot Joshua',
  field: 'Chef',
  cost:'Ug.Shs 4000/hr'
}
]
export default Home