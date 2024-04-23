import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NextButton from './NextButton';

const EatingHabits = () => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/habits.png')}
      />
      <Text style={styles.boldText}>Improve your{'\n'}Eating Habits</Text>
      <Text style={styles.normalText}>
        Improve the quality of your eating with us,{'\n'}
        healthy & quality food.
      </Text>

      <View style={styles.button}>
        <NextButton page="EatingHabits" />
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
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#7B6F72',
    marginTop: 30,
    marginLeft: 30,
  },
  button: {
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
});

export default EatingHabits;
