import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const registerPage = () => {
    navigation.navigate('SignUpPage');
  };

  const handleSubmit = () => {
    navigation.navigate('NewPassword');
  };

  return (
    <View style={styles.body}>
      <View style={styles.view}>
        <Text style={styles.forgetPassword}>Forget Password</Text>
        <Text style={styles.verificationText}>
          Enter your Email ID for OTP verification
        </Text>

        <Text style={styles.emailText}>Email</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email "
            placeholderTextColor="#ADA4A5"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.sendOtp}>SEND OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.resendOtpText}>Resend OTP</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account?
          <TouchableOpacity onPress={registerPage}>
            <Text style={styles.loginButton}>Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  view: {
    marginTop: 30,
    margin: 15,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    backgroundColor: 'white',
  },
  forgetPassword: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 30,
    color: '#1D1617',
  },
  verificationText: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 20,
    marginTop: 20,
    color: '#ADA4A5',
  },
  emailText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: '400',
    color: '#1D1617',
    marginTop: 20,
    marginRight: 200,
  },
  container: {
    width: '100%',
    height: '60',
    borderRadius: 35,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 20,
    color: '#1D1617',
  },
  button: {
    height: '13%',
    width: '60%',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: '#1D1617',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendOtp: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  resendOtpText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: '400',
    color: '#ADA4A5',
    marginTop: 30,
    marginLeft: 150,
  },
  footerText: {
    marginTop: 30,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
  loginButton: {
    color: '#C20AD8',
  },
});

export default ForgetPassword;
