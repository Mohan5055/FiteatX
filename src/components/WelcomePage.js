import { CurrentRenderContext, useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, StyleSheet,Image,Text} from 'react-native'
import CustomButton from './CustomButton'


const WelcomePage=()=> {

    const navigation=useNavigation();

    const nextPage=()=>{
      navigation.navigate('FavoriteFood')
    }

  return (
    <View style={styles.body}>
      <Image style={styles.image} source={require('../../src/assets/Images/Welcome.png')}/>
      <View style={styles.container}>
          <Text style={styles.boldText}>Welcome,Nitin</Text>
          <Text style={styles.normalText}>You are all set now,let's reach your goals together with us</Text>
      </View>
     <View style={styles.button}>
     <CustomButton onPress={nextPage} title='Go To Home'/>
     </View>
    </View>
  )
}

const styles=StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#FFFFFF'
  },
  image:{
    width:280,
    height:304,
    marginTop:150
  },
  container:{
    alignItems:'center',
    width:214,
    height:71,
    marginTop:30
  },
  boldText:{
    width:157,
    height:30,
    fontFamily:'Poppins-Bold',
    fontSize:20,
    fontWeight:'700',
    lineHeight:30,
    color:'#1D1617',
    textAlign:'center'
  },
  normalText:{
    width:214,
    height:36,
    fontFamily:'Poppins',
    fontWeight:'400',
    fontSize:12,
    lineHeight:18,
    textAlign:'center',
    color:'#7B6F72'
  },
  button:{
    marginTop:250
  }

})

export default WelcomePage
