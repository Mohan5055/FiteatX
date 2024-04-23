import React from 'react'
import {View, StyleSheet,Image} from 'react-native'


const Avtar=()=> {
  return (
   <View style={styles.body}>
     <View style={styles.background}>
      <Image style={styles.image} source={require('../../src/assets/Images/FitGirl.png')}/>
      <View style={styles.container}>
        <Image source={require('../../src/assets/Images/icons/zapoff.png')}/>
        <Image source={require('../../src/assets/Images/icons/CameraIcon.png')}/>
        <Image source={require('../../src/assets/Images/icons/Camera.png')}/>
      </View>
    </View>
    <View style={styles.imageContainer}>
     <View  style={styles.imageBox}>
     <Image source={require('../../src/assets/Images/Girl1.png')}/>
     </View>
     <View  style={styles.imageBox}>
     <Image source={require('../../src/assets/Images/Girl1.png')}/>
     </View>
     <View  style={styles.imageBox}>
     <Image source={require('../../src/assets/Images/Girl1.png')}/>
     </View>
     <View  style={styles.imageBox}>
     <Image source={require('../../src/assets/Images/Girl1.png')}/>
     </View>
     </View>
   </View>
  )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    background:{
        backgroundColor:'#92A3FD',
        width:'100%',
        height:'85%',
        alignItems:'center'
    },
    image:{
        position:'absolute',
        top:50
    },
    container:{
        width:295,
        height:68,
        borderRadius:99,
        marginTop:30,
        position:'absolute',
        bottom:20,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
    },
    imageContainer:{
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:25
    },
    imageBox:{
      width:68,
      height:65,
      borderRadius:12,
      backgroundColor:'#F7F8F8',
      justifyContent:'center',
      alignItems:'center'
    }
})

export default Avtar
