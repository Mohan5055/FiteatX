import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';

const OrderPlaced = () => {

  const navigation=useNavigation();

  const nextPage=()=>{
    navigation.navigate('OntheWay')
  }


  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/Frame.png')}
      />
      <Text style={styles.boldText}>Congratulations,You{'\n'}Order has been placed!</Text>
      <Text style={styles.normalText}>Exercise is king and nutrition is queen.Combine the{'\n'} two and you will have a kingdom</Text>
      <Text style={styles.normalText}>-Jack Lalanne</Text>
      <TouchableOpacity style={styles.button} onPress={nextPage}>
        <Text style={styles.buttonText}>Track Order</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Footer/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  image: {
    width: 255,
    height: 327,
    marginTop:50
  },
  boldText:{
    fontFamily:'Poppins',
    fontWeight:'700',
    fontSize:20,
    lineHeight:30,
    textAlign:'center',
    color:"#1D1617",
    marginTop:30
  },
  normalText:{
    fontFamily:'Poppins',
    fontWeight:'400',
    fontSize:12,
    lineHeight:18,
    textAlign:'center',
    color:"#7B6F72",
    marginTop:25
  },
  button:{
    position:'absolute',
    width:315,
    height:60,
    borderRadius:99,
    backgroundColor:'#95ADFE',
    bottom:100,
    justifyContent:'center'
  },
  buttonText:{
    fontFamily:'Poppins',
    fontWeight:'700',
    fontSize:16,
    lineHeight:24,
    color:'#FFFFFF',
    textAlign:'center'
  },
  footer:{
    position:'absolute',
    bottom:0
  }

});

export default OrderPlaced;
