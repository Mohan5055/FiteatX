import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Payment = () => {

  const navigation = useNavigation();

  const nextPage = () => {

    navigation.navigate('Profile');

  };
  const prevPage=()=>{
    navigation.navigate('FavoriteFood')
  }

  return (
    <View style={styles.body}>
     <TouchableOpacity onPress={prevPage}>
     <Image
        style={styles.prevButton}
        source={require('../../src/assets/Images/icons/IconBack.png')}
      />
     </TouchableOpacity>
      <View style={styles.container1}>
        <Text style={styles.boldText}>Payment Method</Text>
        <Text style={styles.normalText}>
          This data will be displayed in your account profile for security
        </Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.box1}>
            <Image style={styles.paypalImage} source={require('../../src/assets/Images/paypal.png')} />
        </View>
        <View style={styles.box1}>
        <Image style={styles.paypalImage} source={require('../../src/assets/Images/visa.png')} />
        </View>
        <View style={styles.box1}>
        <Image style={styles.paypalImage} source={require('../../src/assets/Images/Payoneer.png')} />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={nextPage}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  prevButton: {
    width: 45,
    height: 45,
    marginLeft: 25,
    borderRadius: 15,
    marginTop: 30,
  },
  container1: {
    width: 264,
    height: 97,
    marginTop: 30,
    marginLeft: 25,
  },
  boldText: {
    width: 264,
    height: 33,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 33,
    color: '#09051C',
  },
  normalText: {
    marginTop: 20,
    width: 239,
    height: 44,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 22,
    color: '#000000',
  },
  container2: {
    marginTop: 20,
    marginLeft: 25,
    width: 335,
    height: 256,
    borderRadius: 22,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box1: {
    width: 335,
    height: 73,
    borderRadius: 22,
    justifyContent:'center',
    alignItems:'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  paypalImage:{
    width:86,
    height:23,
  },
  button: {
    width: 325,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#92A3FD',
    justifyContent: 'center',
    marginTop: 195,
    marginLeft: 30,
  },
  textButton: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#FEFEFE',
    textAlign: 'center',
  },
});

export default Payment;
