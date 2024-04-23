import React from 'react'
import { View,Text, StyleSheet, Image, Touchable, TouchableOpacity, useAnimatedValue } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const MyOrder=()=> {

    const navigation=useNavigation()

    const backPage=()=>{
        navigation.navigate('Profile')
    }

    const orderSchedule=()=>{
        navigation.navigate('OrderSchedule')
    }

  return (
    <View style={styles.body}>
        <View style={styles.navbor}>
           <TouchableOpacity onPress={backPage}>
           <Image source={require('../../src/assets/Images/icons/backNavs.png')}/>
           </TouchableOpacity>
            <Text style={styles.myOrderText}>My Orders</Text>
            <Image source={require('../../src/assets/Images/icons/detailNav.png')}/>
        </View>
       <TouchableOpacity style={styles.orderScheduleBox} onPress={orderSchedule}>
            <Text style={styles.myOrderText}>Order Schedule</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#FFFFFF',
        alignItems:'center'
    },
    navbor:{
        width:315,
        height:34,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:40

    },
    myOrderText:{
        fontFamily:'Poppins',
        fontWeight:'700',
        fontSize:16,
        lineHeight:24,
        color:'#1D1617'
    },
    orderScheduleBox:{
        width:315,
        height:55,
        borderRadius:99,
        borderWidth:1,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MyOrder
