import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
const Goal2 = () => {
  const navigation = useNavigation();
  const nextPage = () => {
    navigation.navigate('Goal3');
  };

  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <Text style={styles.boldText}>What is your goal?</Text>
        <Text style={styles.normalText}>
          It will help us to choose a best {'\n'} program for you
        </Text>
      </View>

      <ImageBackground
        style={styles.card}
        source={require('../../src/assets/Images/Card.png')}
        resizeMode="cover">
        <Image
          style={styles.goalImage}
          source={require('../../src/assets/Images/Layer.png')}
        />
        <View style={styles.box}>
          <Text style={styles.text1}>Learn about Healthy Eating</Text>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.text2}>
            I'm "skinny fat".look thin but have no shape.I want to add learn
            muscel in the right way
          </Text>
        </View>
      </ImageBackground>
      <Image
        style={styles.leftEdge}
        source={require('../../src/assets/Images/leftEdge.png')}
      />
      <Image
        style={styles.rightEdge}
        source={require('../../src/assets/Images/rightEdge.png')}
      />
      <View style={styles.button}>
        <CustomButton onPress={nextPage} title="confirm" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    width: 195,
    height: 80,
  },
  boldText: {
    width: 195,
    height: 30,
    marginTop: 5,
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color: '#1D1617',
  },
  normalText: {
    width: 182,
    height: 36,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 5,
    color: '#7B6F72',
  },
  leftEdge: {
    position: 'absolute',
    width: 50,
    height: 360,
    top: 320,
    left: 0,
  },
  rightEdge: {
    position: 'absolute',
    width: 50,
    height: 360,
    top: 320,
    right: 0,
  },
  card: {
    width: 275,
    height: 500,
    marginTop: 50,
    borderRadius: 22,
    alignItems: 'center',
  },

  goalImage: {
    width: 203,
    height: 290,
    marginTop: 30,
  },
  box: {
    width: 215,
    height: 98,
    marginTop: 20,
    alignItems: 'center',
  },
  text1: {
    width: 193,
    height: 21,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
  },
  horizontalLine: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 2,
    textAlign: 'center',
    width: 50,
    marginVertical: 3,
  },
  text2: {
    color: '#FFFFFF',
    marginTop: 15,
    textAlign: 'center',
  },
  button: {
    marginTop: 100,
  },
});

export default Goal2;
