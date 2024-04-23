import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NextButton from './NextButton';



const BuyingOption = () => {

  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/buy.png')}
      />
     
        <Text style={styles.boldText}>Find Where to buy</Text>
        <Text style={styles.normalText}>
          Don't worry if you have trouble determining {'\n'} your buying option,
          {'\n'} {'\n'} we can be of help !
        </Text>

      <View style={styles.button}>
        <NextButton page="Buying" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: '55%',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    marginTop: 30,
    color: '#1D1617',
    marginLeft:30
    
  },
  normalText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#7B6F72',
    marginLeft:30,
    marginTop:30
  },
  button: {
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
});

export default BuyingOption;
