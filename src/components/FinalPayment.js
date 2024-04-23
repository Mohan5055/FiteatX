import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Footer from './Footer';
const FinalPayment = () => {
  const navigation = useNavigation();

  const backPage = () => {
    navigation.navigate('ConfirmOrder');
  };

  const nextPage = () => {
    navigation.navigate('Location');
  };

  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={backPage}>
        <Image
          style={styles.backButton}
          source={require('../../src/assets/Images/icons/backNavs.png')}
        />
      </TouchableOpacity>
      <Text style={styles.orderText}>Payment</Text>

      <TouchableOpacity style={styles.orderItem1} onPress={nextPage}>
      
          <View style={styles.locationBox}>
            <Image
              style={styles.imagePaypal}
              source={require('../../src/assets/Images/paypal.png')}
            />
            <Text style={styles.textAccountNo}>212163528465****</Text>
         
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={nextPage} style={styles.orderItem2}>
       
          <View style={styles.locationBox}>
            <Image
              style={styles.imagePaypal}
              source={require('../../src/assets/Images/visa.png')}
            />
            <Text style={styles.textAccountNo}>212163528465****</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.orderItem2} onPress={nextPage}>
        
          <View style={styles.locationBox}>
            <Image
              style={styles.imagePaypal}
              source={require('../../src/assets/Images/Payoneer.png')}
            />
            <Text style={styles.textAccountNo}>212163528465****</Text>
          </View>
      
      </TouchableOpacity>
      <View style={styles.footer}>
        <Footer />
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
    marginTop: 30,
  },
  orderItem1: {
    width: 335,
    height: 73,
    borderRadius: 22,
    marginLeft: 30,
    marginTop: 20,
    justifyContent: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  orderItem2: {
    width: 335,
    height: 73,
    borderRadius: 22,
    backgroundColor: '#F6F6F6',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 30,
    marginTop: 30,
    justifyContent: 'center',
  },
  locationBox: {
    flexDirection: 'row',
  },
  imagePaypal: {
    width: 86,
    height: 23,
    marginLeft: 10,
  },
  textAccountNo: {
    position: 'absolute',
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#3B3B3B',
    right: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
});

export default FinalPayment;
