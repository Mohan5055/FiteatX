import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View,Text, StyleSheet,TouchableOpacity,Image } from 'react-native'
import Footer from './Footer'

const DeliveryChat=()=> {


  const navigation=useNavigation();

  const backPage=()=>{
    navigation.navigate('Chat')
  }


  return (
    <View style={styles.body}>
       <TouchableOpacity onPress={backPage}>
       <Image
              style={styles.backButton}  source={require('../../src/assets/Images/icons/backNavs.png')}
        />
       </TouchableOpacity>

       <Text style={styles.deliveryText}>Delivery Chat</Text>
       <View style={styles.box}>
        <Image style={styles.image} source={require('../../src/assets/Images/ProfilePhoto1.png')} />
        <View>
          <Text style={styles.boldText}>Sanjay</Text>
          <Text style={styles.normalText}>Your Order Just Arrived!</Text>
        </View>
        <Text style={styles.timeText}>20:00</Text>
       </View>
       <View style={styles.box}>
        <Image style={styles.image} source={require('../../src/assets/Images/ProfilePhoto2.png')} />
        <View>
          <Text style={styles.boldText}>Shubham</Text>
          <Text style={styles.normalText}>I am outside your location</Text>
        </View>
        <Text style={styles.timeText}>20:00</Text>
       </View>
       <View style={styles.box}>
        <Image style={styles.image} source={require('../../src/assets/Images/ProfilePhoto3.png')} />
        <View>
          <Text style={styles.boldText}>Sunidhi</Text>
          <Text style={styles.normalText}>Will take 5mins to reach</Text>
        </View>
        <Text style={styles.timeText}>20:00</Text>
       </View>
        <View style={styles.footer}>
        <Footer/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#FEFEFF'
  },
  backButton:{
    width:45,
    height:45,
    marginLeft:30,
    marginTop:30
  },  
  deliveryText:{
    fontFamily:'Rubik', 
    fontSize:25,
    fontWeight:'400',
    lineHeight:32.76,
    color:'#09051C',
    marginLeft:30,
    marginTop:30
  },
  box:{
    width:335,
    height:81,
    borderRadius:22,
    backgroundColor:'#FFFFFF',
    marginTop:20,
    marginLeft:30,
    flexDirection:'row',
    alignItems:'center'
  },
  image:{
    marginLeft:10,
    width:62,
    height:62
  },
  boldText:{
    fontFamily:'Rubik',
    fontWeight:'400',
    fontSize:15,
    lineHeight:20,
    color:'#09051C',
    marginLeft:15
  },
  normalText:{
    fontFamily:'Rubik',
    fontWeight:'400',
    fontSize:14,
    lineHeight:17,
    color:'#3B3B3B',
    marginLeft:15,
    marginTop:10
  },
  timeText:{
    position:'absolute',
    right:15,
    top:10
  },
  footer:{
    position:'absolute',
    bottom:0
  }

})

export default DeliveryChat
