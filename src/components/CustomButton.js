import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomButton = ({ onPress, title, login }) => {
  return (
    <TouchableOpacity style={styles.body} onPress={onPress}>
    <LinearGradient
      colors={['#92A3FD', '#9DCEFF']}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.button}>
      {<MaterialCommunityIcons style={styles.buttonIcon} name={login} size={24} color="#FFFFFF"/>}
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  button: {
    width: 315,
    height: 60,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: '#FFFFFF',
  },
});

export default CustomButton;
