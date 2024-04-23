import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Footer from './Footer';

const ConfirmOrder = () => {
  const navigation = useNavigation();

  const backPage = () => {
    navigation.navigate('ConfirmOrder');
  };

  const nextPage = () => {
    navigation.navigate('FinalPayment');
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={backPage}>
        <Image
          style={styles.backButton}
          source={require('../../src/assets/Images/icons/backNavs.png')}
        />
      </TouchableOpacity>
      <Text style={styles.orderText}>Confirm Order</Text>

      <View style={styles.orderItem}>
        <View style={styles.textStyle}>
          <Text style={styles.deliverText}>Deliver To</Text>
          <Text style={styles.editText}>Edit</Text>
        </View>
        <View style={styles.locationBox}>
          <Image
            style={styles.images}
            source={require('../../src/assets/Images/icons/IconLocation.png')}
          />
          <Text style={styles.textLocation}>KMS Home,BTM 1st Stage,{'\n'}Bengaluru,KN 560029</Text>
        </View>
      </View>
      <View style={styles.orderItem}>
        <View style={styles.textStyle}>
          <Text style={styles.deliverText}>Payment Method</Text>
          <Text style={styles.editText}>Edit</Text>
        </View>
        <View style={styles.locationBox}>
          <Image
            style={styles.imagePaypal}
            source={require('../../src/assets/Images/paypal.png')}
          />
          <Text style={styles.textAccountNo}>212163528465****</Text>
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
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  backButton: {
    marginLeft: 30,
    marginTop: 30,
  },
  orderText: {
    fontFamily: 'Rubik',
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 32.76,
    color: '#09051C',
    marginLeft: 30,
    marginTop: 10,
  },
  orderItem: {
    width: 335,
    height: 108,
    borderRadius: 22,
    color: '#FFFFFF',
    marginLeft: 30,
    marginTop: 30,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor:"#FFFFFF"
  },
  textStyle: {
    flexDirection: 'row',
    marginTop:10
  },
  deliverText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#3B3B3B',
    marginLeft: 10,
  },
  editText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: '#92A3FD',
    right: 20,
    position: 'absolute',
  },
  locationBox: {
    flexDirection: 'row',
    marginTop:15
  },
  images: {
    width: 33,
    height: 33,
    marginLeft: 10,
  },
  textLocation:{
    fontFamily:'Rubik',
    fontSize:15,
    fontWeight:'400',
    lineHeight:20,
    color:'#09051C'
  },
  imagePaypal:{
    width:86,
    height:23,
    marginLeft:10
  },
  textAccountNo:{
    position:'absolute',
    fontFamily:'Rubik',
    fontWeight:'400',
    fontSize:14,
    lineHeight:17,
    color:'#3B3B3B',
    right:20
  },
 
  sumBox: {
    width: 346,
    height: 206,
    marginLeft: 30,
    borderRadius: 16,
    backgroundColor: '#4D9CF9',
    position: 'absolute',
    bottom: 130,
  },
  totalBox: {
    width: 300,
    height: 98,
    borderWidth: 1,
    marginLeft: 20,
    marginTop: 20,
  },
  button: {
    width: 325,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#FEFEFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 20,
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
});

export default ConfirmOrder;
