import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View,Text, StyleSheet,TouchableOpacity,Image} from 'react-native' 


const SupportChat=()=> {

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

       <Text style={styles.supportText}>Support Chat</Text>
       <View style={styles.box}>
        <Image style={styles.image} source={require('../../src/assets/Images/ProfilePhoto1.png')} />
        <View>
          <Text style={styles.boldText}>Kaya Gupta</Text>
          <Text style={styles.normalText}>Online</Text>
        </View>
        <Image style={styles.callImage} source={require('../../src/assets/Images/icons/IconCall.png')}/>
       </View>
       <View style={styles.massageBox}>
        <Image style={styles.sendImage} source={require('../../src/assets/Images/icons/IconSend.png')}/>
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
        marginTop:20
      },  
      supportText:{
        fontFamily:'Rubik', 
        fontSize:25,
        fontWeight:'400',
        lineHeight:32.76,
        color:'#09051C',
        marginLeft:30,
        marginTop:20
      },
      box:{
        width:335,
        height:81,
        borderRadius:22,
        backgroundColor:'#FFFFFF',
        marginTop:20,
        marginLeft:30,
        flexDirection:'row',
        alignItems:'center',
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
      callImage:{
        width:40,
        height:40,
        position:'absolute',
        right:10
      },
      
      massageBox:{
        width:"95%",
        height:74,
        borderRadius:22,
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        position:'absolute',
        bottom:0,
       justifyContent:'center',
       margin:10
      },
      sendImage:{
        position:'absolute',
        right:10
      }
})

export default SupportChat
