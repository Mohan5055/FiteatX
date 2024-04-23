import React from 'react'
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Chat=() =>{

    const navigation=useNavigation();

    const deliveryChat=()=>{
        navigation.navigate('DeliveryChat')
    }

    const supportChat=()=>{
        navigation.navigate('SupportChat')
    }

    const profile=()=>{
        navigation.navigate('Profile')
    }


  return (
    <View style={styles.body}>
   <TouchableOpacity style={styles.icon} onPress={profile}>
   <Image  source={require('../../src/assets/Images/icons/backNavs.png')}/>
   </TouchableOpacity>
        <View style={styles.container}>

          <TouchableOpacity style={styles.child} onPress={deliveryChat}>
                <Text style={styles.text}>DeliveryChat</Text>
          </TouchableOpacity>

         <TouchableOpacity style={styles.child} onPress={supportChat}>
                <Text style={styles.text}>SupportChat</Text>
         </TouchableOpacity>
        </View>
      
    </View>
  )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
       position:'absolute',
       top:30,
       left:30 
    },
    container:{
        width:375,
        height:250,
        backgroundColor:'#E3E6E6',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:22

    },
    child:{
        width:300,
        height:80,
        borderRadius:99,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'Rubik-Bold',
        fontSize:25,
        fontWeight:'400',
        lineHeight:33,
        color:'#09051C',
    }
})

export default Chat
