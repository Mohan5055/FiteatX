import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NextButton from './NextButton';

const Recommendation = () => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/recommend.png')}
      />

      <Text style={styles.boldText}>Get Best {'\n'}Recommendation </Text>
      <Text style={styles.normalText}>
        Let's keep burning, to achieve yours goals, we {'\n'} recommend you the
        best and healthy
      </Text>

      <View style={styles.button}>
        <NextButton page="Recommendation" />
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
    color: '#1D1617',
    marginLeft: 30,
    marginTop: 30,
  },
  normalText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 20,
    color: '#7B6F72',
    marginLeft: 30,
  },
  button: {
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
});
export default Recommendation;
