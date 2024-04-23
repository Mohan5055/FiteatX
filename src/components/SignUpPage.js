import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import CheckBox from 'react-native-check-box';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SignUpPage = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);

  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);

  const loginPage = () => {
    navigation.navigate('LoginPage');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setShowPasswordIcon(!showPasswordIcon);
  };

  const handleSubmit = () => {
    if (fullName && lastName && email && password && checked) {
      navigation.navigate('CreateProfile');
    } else {
      Alert.alert(
        'Validation Error',
        'Please fill out all fields and accept the terms.',
      );
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.normalText}>Hey there,</Text>
      <Text style={styles.boldText}>Create an Account</Text>

      <View style={styles.container}>
        <View style={styles.box}>
          <Feather style={styles.image} name="user" size={18} color="#7B6F72" />

          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#ADA4A5"
            value={fullName}
            onChangeText={text => setFullName(text)}
          />
        </View>
        <View style={styles.box}>
          <Feather style={styles.image} name="user" size={18} color="#7B6F72" />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#ADA4A5"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>
        <View style={styles.box}>
          <Fontisto
            style={styles.image}
            name="email"
            size={18}
            color="#7B6F72"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ADA4A5"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.box}>
          <SimpleLineIcons
            style={styles.image}
            name="lock"
            size={18}
            color="#7B6F72"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ADA4A5"
            secureTextEntry={isPasswordVisible}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            {showPasswordIcon ? (
              <Feather
                style={styles.iconPasswordHide}
                name="eye"
                size={18}
                color="#7B6F72"
              />
            ) : (
              <Feather
                style={styles.iconPasswordHide}
                name="eye-off"
                size={18}
                color="#7B6F72"
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            isChecked={checked}
            onClick={() => setChecked(!checked)}
            checkBoxColor="#ADA4A5"
          />
          <Text style={styles.policyText}>
            By continuing you accept our
            <Text style={styles.underlineText}> Privacy Policy </Text>
            and{'\n'}
            <Text style={styles.underlineText}> Term of Use </Text>
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <CustomButton onPress={handleSubmit} title="Register" />
      </View>

      <View style={styles.horizontalLineBody}>
        <View style={styles.horizontalLeft} />
        <Text style={styles.horizontalLineText}>or</Text>
        <View style={styles.horizontalRight} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.googleIcon}>
          <Image source={require('../../src/assets/Images/Google.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookIcon}>
          <Image source={require('../../src/assets/Images/Facebook.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already have an account?</Text>

        <TouchableOpacity onPress={loginPage}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  normalText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
    marginTop: 30,
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    color: '#1D1617',
  },
  container: {
    width: 315,
    height: 277,
    marginTop: 40,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    justifyContent: 'center',
    width: 315,
    height: 48,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8F8',
  },
  image: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    height: 48,
    paddingLeft: 10,
    color: '#1D1617',
  },
  iconPasswordHide: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  policyText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#ADA4A5',
    marginLeft: 5,
  },
  underlineText: {
    borderBottomWidth: 1,
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 200,
  },
  horizontalLineBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalLeft: {
    flex: 1,
    height: 2,
    backgroundColor: '#DDDADA',
    marginLeft: 30,
  },
  horizontalLineText: {
    width: 50,
    textAlign: 'center',
    color: '#1D1617',
  },
  horizontalRight: {
    flex: 1,
    height: 2,
    backgroundColor: '#DDDADA',
    marginRight: 30,
  },
  iconContainer: {
    width: 130,
    height: 50,
    marginTop: 40,
    flexDirection: 'row',
  },
  googleIcon: {
    width: 50,
    height: 50,
    borderWidth: 0.8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DDDADA',
  },
  facebookIcon: {
    width: 50,
    height: 50,
    borderWidth: 0.8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DDDADA',
    marginLeft: 'auto',
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
  loginButton: {
    color: '#C20AD8',
    marginTop: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
});

export default SignUpPage;
