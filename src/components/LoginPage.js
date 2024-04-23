import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const LoginPage = () => {
  const navigation = useNavigation();

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setShowPasswordIcon(!showPasswordIcon);
  };

  const register = () => {
    navigation.navigate('SignUpPage');
  };

  const forgetPage = () => {
    navigation.navigate('ForgetPassword');
  };

  const nextPage = () => {
      navigation.navigate('WelcomePage'); 
  };

  return (
    <View style={styles.body}>
      <Text style={styles.normalText}>Hey there,</Text>
      <Text style={styles.boldText}>Welcome Back</Text>

      <View style={styles.box1}>
        <Fontisto style={styles.image} name="email" size={18} color="#7B6F72" />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ADA4A5"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.box2}>
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

      <TouchableOpacity onPress={forgetPage}>
        <Text style={styles.forgetPassword}>Forget Password</Text>
        <View style={styles.horizontalLine}></View>
      </TouchableOpacity>

      <View style={styles.button}>

        <CustomButton onPress={nextPage} title="Login"  login="login"></CustomButton>
         
      </View>

      <View style={styles.horizontalLineBody}>

        <View style={styles.horizontalLeft} />

        <Text style={styles.horizontalLineText}>or</Text>

        <View style={styles.horizontalRight} />

      </View>

      <View style={styles.iconContainer}>
        <Image
          style={styles.googleIcon}
          source={require('../../src/assets/Images/Google.png')}
        />
        <Image
          style={styles.facebookIcon}
          source={require('../../src/assets/Images/Facebook.png')}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={register}>
          <Text style={styles.loginButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  normalText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
    marginTop: 40,
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    color: '#1D1617',
  },
  image: {
    marginLeft: 15,
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 315,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F7F8F8',
    marginTop: 50,
  },
  box2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 315,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F7F8F8',
    marginTop: 20,
  },
  iconBox: {
    width: 18,
    height: 18,
    left: 10,
  },
  iconPasswordHide: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 48,
    marginLeft: 15,
    color: '1D1617',
  },
  iconHidePassword: {
    position: 'absolute',
    width: 18,
    height: 18,
    right: 20,
  },
  forgetPassword: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#ADA4A5',
    textAlign: 'center',
    marginTop: 10,
    color: '#C20AD8',
  },
  otpBox: {
    flexDirection: 'row',
  },
  horizontalLine: {
    borderBottomColor: '#C20AD8',
    borderBottomWidth: 2,
    textAlign: 'center',
    width: 110,
  },
  button: {
    alignItems: 'center',
    marginTop: 270,
  },
  loginIcon: {
    width: 30,
    height: 30,
  },
  horizontalLineBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
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
    marginTop: 70,
    width: 130,
    height: 50,
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

export default LoginPage;
