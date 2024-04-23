import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const navigation = useNavigation();

  const nextPage = () => {
    navigation.navigate('BuyingOption');
  };

  return (
    <LinearGradient
      colors={['#92A3FD', '#9DCEFF']}
      start={{x: 1, y: 0.5}}
      end={{x: 0, y: 0.5}}
      style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/home.png')}
      />
      <Text style={styles.bottom_text}>Everybody Can Eat Healthy</Text>

      <TouchableOpacity style={styles.button} onPress={nextPage}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 162,
    height: 38,
  },
  bottom_text: {
    marginTop: 10,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    color: '#7B6F72',
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 315,
    height: 60,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#92A3FD',
    textAlign: 'center',
  },
});

export default HomeScreen;
