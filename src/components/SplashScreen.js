import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      const timeout = setTimeout(() => {
        navigation.navigate('HomeScreen');
        setInitialLoad(false);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [navigation, initialLoad]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setInitialLoad(true);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/splash.png')}
      />
      <Text style={styles.bottom_text}>Everybody Can Eat Healthy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 162,
    height: 42,
  },

  bottom_text: {
    marginTop: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 27,
    color: '#7B6F72',
    textAlign: 'center',
  },
});

export default SplashScreen;
