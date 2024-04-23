import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NextButton from './NextButton';

const HealthyEating = () => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/healthy.png')}
      />
      <Text style={styles.boldText}>Learn about Healthy {'\n'}Eating</Text>

      <Text style={styles.normalText}>
        Let's start a healthy lifestyle with us,we can {'\n'}determine your diet
        every day.healthy {'\n'}eating is fun
      </Text>
      <View style={styles.button}>
        <NextButton page="HealthyEating" />
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
    height: '58%',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    color: '#1D1617',
    marginLeft: 30,
    marginTop: 30,
  },
  normalText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#7B6F72',
    marginLeft: 30,
    marginTop: 30,
  },
  button: {
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
});
export default HealthyEating;
