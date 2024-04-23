import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View,Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import Footer from './Footer';

const OrderDetails2=()=> {

  const navigation=useNavigation();

const backPage=()=>{
  navigation.navigate('OrderTracking')
}


const nextPage=()=>{
  navigation.navigate('ConfirmOrder')
}

  return (
    <View style={styles.body}>
       <TouchableOpacity onPress={backPage}>
       <Image
              style={styles.backButton}  source={require('../../src/assets/Images/icons/backNavs.png')}
        />
       </TouchableOpacity>
        <Text style={styles.orderText}>Order details</Text>
        <View style={styles.itemBox}>
          <View style={styles.orderItem}>
            <Image style={styles.images} source={require('../../src/assets/Images/MenuPhoto1.png')}/>
            <View style={styles.textBox}>
              <Text style={styles.boldspacyText}>Spacy fresh crab</Text>
              <Text style={styles.normalspacyText}>Waroenk kita</Text>
              <Text style={styles.rate}>₹ 200</Text>
            </View>
            <View style={styles.addIconBox}>
              <Image style={styles.minusIcon}  source={require('../../src/assets/Images/icons/IconMinus.png')}/>
              <Text>1</Text>
              <Image style={styles.minusIcon}  source={require('../../src/assets/Images/icons/IconPlus.png')}/>
            </View>
          </View>
          <View style={styles.orderItem}>
            <Image style={styles.images} source={require('../../src/assets/Images/MenuPhoto2.png')}/>
            <View style={styles.textBox}>
              <Text style={styles.boldspacyText}>Spacy fresh crab</Text>
              <Text style={styles.normalspacyText}>Waroenk kita</Text>
              <Text style={styles.rate}>₹ 200</Text>
            </View>
            <View style={styles.addIconBox}>
              <Image style={styles.minusIcon}  source={require('../../src/assets/Images/icons/IconMinus.png')}/>
              <Text>1</Text>
              <Image style={styles.minusIcon}  source={require('../../src/assets/Images/icons/IconPlus.png')}/>
            </View>
            <View style={styles.curveBox}></View>
          </View>
          <View style={styles.orderItem}>
            <Image style={styles.images} source={require('../../src/assets/Images/MenuPhoto3.png')}/>
            <View style={styles.textBox}>
              <Text style={styles.boldspacyText}>Spacy fresh crab</Text>
              <Text style={styles.normalspacyText}>Waroenk kita</Text>
              <Text style={styles.rate}>₹ 200</Text>
            </View>
            <View style={styles.addIconBox}>
              <Image style={styles.minusIcon}  source={require('../../src/assets/Images/icons/IconMinus.png')}/>
              <Text>1</Text>
              <Image style={styles.minusIcon}  source={require('../../src/assets/Images/icons/IconPlus.png')}/>
            </View>
          </View>
        </View>

        <View style={styles.sumBox}>
          <View style={styles.totalBox}>
            <Text>Sub-Total</Text>
            <Text>Delivery Charge</Text>
            <Text>Discount</Text>
            <Text>Total</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={nextPage}>
        <Text style={styles.textButton}>Place My Order</Text>
      </TouchableOpacity>
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
    marginLeft:30,
    marginTop:30
  },
  orderText:{
    fontFamily:'Rubik', 
    fontSize:25,
    fontWeight:'400',
    lineHeight:32.76,
    color:'#09051C',
    marginLeft:30,
    marginTop:10
  },
  itemBox:{
    width:347,
    height:349,
    marginLeft:30,
    marginTop:10,
    justifyContent:'space-between',
  
  },
  orderItem:{
    width:347,
    height:103,
    borderRadius:22,
    color:'#FFFFFF',
    alignItems:'center',
    flexDirection:'row'
  },
  
  images:{
    width:62,
    height:62,
    marginLeft:10
    
  },
  textBox:{
    marginLeft:10,
    
  },
  boldspacyText:{
    fontFamily:'Rubik',
    fontWeight:'400',
    fontSize:15,
    lineHeight:20,
    color:"#09051C"
  },
  normalspacyText:{
    fontFamily:'Rubik',
    fontWeight:'400',
    fontSize:14,
    lineHeight:17,
    color:'#3B3B3B',
    marginTop:5
  },
  rate:{
    fontFamily:'Rubik',
    fontSize:19,
    fontWeight:'400',
    color:'#92A3FD',marginTop:5
  },
  addIconBox:{
    width:92,
    height:26,
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:40
  },
  minusIcon:{
    width:26,
    height:26,
  },
  sumBox:{
    width:346,
    height:206,
    marginLeft:30,
    borderRadius:16,
    backgroundColor:'#4D9CF9',
    position:'absolute',
    bottom:130
  },
  totalBox:{
    width:300,
    height:98,
    marginLeft:20,
    marginTop:20
  },
  button: {
    width: 325,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#FEFEFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop:20
  },
  textButton: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#92A3FD',
    textAlign: 'center',
  },
  footer:{
    position:'absolute',
    bottom:0
  }
  
})

export default OrderDetails2

