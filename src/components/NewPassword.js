import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(''));
  const otpInputs = useRef([]);

  const navigation = useNavigation();

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleSubmit = async () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.body}>
      <View style={styles.view}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter New Password"
            placeholderTextColor="#ADA4A5"
            secureTextEntry
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#ADA4A5"
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={ref => (otpInputs.current[index] = ref)}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
              value={value}
              onChangeText={text => handleOtpChange(text, index)}
              secureTextEntry
            />
          ))}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit OTP</Text>
        </TouchableOpacity>
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
    marginTop: 50,
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  container: {
    marginTop: 20,
    width: '100%',
    height: 60,
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  otpBox: {
    width: 45,
    height: 45,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#6200EE',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default NewPassword;
