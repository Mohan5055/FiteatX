import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Footer from './Footer';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  const navigation = useNavigation();

  const supportChat = () => {
    navigation.navigate('SupportChat');
  };

  const avtar = () => {
    navigation.navigate('Avtar');
  };

  const myOrder = () => {
    navigation.navigate('MyOrder');
  };

  const chat = () => {
    navigation.navigate('Chat');
  };

  const [isToggled, setIsToggled] = useState(false);
  const circlePosition = useRef(new Animated.Value(0)).current;

  const toggleColors = () => {
    setIsToggled(!isToggled);
    Animated.timing(circlePosition, {
      toValue: isToggled ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const leftPosition = circlePosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  const gradientColors = isToggled
    ? ['#EEA4CE', '#C58BF2']
    : ['#C58BF2', '#EEA4CE'];

  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <View style={styles.navigationContainer}>
          <Ionicons name="chevron-back-outline" size={18} color="#1D1617" />
        </View>

        <Text style={styles.navText}>Profile</Text>
        <View style={styles.navigationContainer}>
          <Entypo name="dots-two-horizontal" size={18} color="#1D1617" />
        </View>
      </View>
      <View style={styles.container2}>
        <Image
          style={styles.image}
          source={require('../../src/assets/Images/LatestPic.png')}
        />
        <View style={styles.box}>
          <Text style={styles.boldText}>Stefani Wong</Text>
          <Text style={styles.normalText}>Karnataka,India</Text>
        </View>
        <TouchableOpacity onPress={avtar}>
          <LinearGradient
            colors={["#92A3FD","#9DCEFF"]}
            start={{x: 1, y: 0.5}}
            end={{x: 0, y: 0.5}}
            style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.account}>
        <Text style={styles.textAccount}>Account</Text>

        <View style={styles.box1}>
          <Feather name="user" size={18} color="#92A3FD" />

          <Text style={styles.personalText}>Personal Data</Text>
          <Ionicons
            style={styles.personalLeft}
            name="chevron-forward-outline"
            size={18}
            color="#1D1617"
          />
        </View>
        <View style={styles.box1}>
          <AntDesign name="shoppingcart" size={18} color="#92A3FD" />

          <Text style={styles.personalText}>My Cart</Text>

          <Ionicons
            style={styles.personalLeft}
            name="chevron-forward-outline"
            size={18}
            color="#1D1617"
          />
        </View>
        <View style={styles.box1}>
          <FontAwesome name="history" size={18} color="#92A3FD" />
          <Text style={styles.personalText}>Order History</Text>
          <TouchableOpacity style={styles.personalLeft} onPress={myOrder}>
            <Ionicons
              style={styles.personalLeft}
              name="chevron-forward-outline"
              size={18}
              color="#1D1617"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <Foundation name="graph-bar" size={18} color="#92A3FD" />
          <Text style={styles.personalText}>Learning Progress</Text>
          <Ionicons
            style={styles.personalLeft}
            name="chevron-forward-outline"
            size={18}
            color="#1D1617"
          />
        </View>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>Notification</Text>
        <View style={styles.popup}>
          <Ionicons name="notifications-outline" size={18} color="#92A3FD" />
          <Text style={styles.personalText}>Pop-up Notification</Text>

          <TouchableOpacity onPress={toggleColors}>
            <LinearGradient
              colors={gradientColors}
              start={{x: 1, y: 0.5}}
              end={{x: 0, y: 0.5}}
              style={styles.toggleIcon}>
              <Animated.View
                style={[styles.circle, {left: leftPosition}]}>
              </Animated.View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.other}>
        <Text style={styles.textAccount}>Other</Text>

        <View style={styles.box1}>
          <AntDesign name="contacts" size={18} color="#92A3FD" />
          <Text style={styles.personalText}>Contact Us</Text>
          <TouchableOpacity style={styles.personalLeft} onPress={chat}>
            <Ionicons
              style={styles.personalLeft}
              name="chevron-forward-outline"
              size={18}
              color="#1D1617"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <MaterialIcons name="policy" size={18} color="#92A3FD" />
          <Text style={styles.personalText}>Privacy Policy</Text>

          <Ionicons
            style={styles.personalLeft}
            name="chevron-forward-outline"
            size={18}
            color="#1D1617"
          />
        </View>
        <View style={styles.box1}>
          <Feather name="settings" size={18} color="#92A3FD" />
          <Text style={styles.personalText}>Setting</Text>

          <Ionicons
            style={styles.personalLeft}
            name="chevron-forward-outline"
            size={18}
            color="#1D1617"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Footer />
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
  container1: {
    width: 315,
    height: 32,
    borderRadius: 8,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F7F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navImage1: {
    marginLeft: 0,
  },
  navText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: '#1D1617',
    lineHeight: 24,
    textAlign: 'center',
    flex: 1,
  },
  navImage2: {
    marginLeft: 'auto',
  },
  container2: {
    width: 315,
    height: 55,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 55,
    height: 55,
    marginLeft: 0,
  },
  box: {
    width: 98,
    height: 44,
    marginTop: 6,
    marginLeft: 10,
  },
  boldText: {
    width: 95,
    height: 21,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    color: '#1D1617',
  },
  normalText: {
    width: 98,
    height: 18,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#7B6F72',
    marginTop: 6,
  },
  editButton: {
    width: 83,
    height: 30,
    marginLeft: 67,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  account: {
    width: 335,
    height: 189,
    borderRadius: 16,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },
  textAccount: {
    width: 69,
    height: 24,
    color: '#1D1617',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginTop: 10,
    marginLeft: 20,
  },
  box1: {
    width: 280,
    height: 25,
    marginLeft: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  personalText: {
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#7B6F72',
  },
  personalLeft: {
    width: 18,
    height: 18,
    marginLeft: 'auto',
  },
  notification: {
    width: 335,
    height: 99,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 16,
  },
  notificationText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#1D1617',
    marginTop: 10,
    marginLeft: 20,
  },
  popup: {
    width: 280,
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleIcon: {
    width: 40,
    height: 20,
    borderRadius: 99,
    justifyContent: 'center',
    marginLeft:100,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
  },
  other: {
    width: 335,
    height: 159,
    borderRadius: 16,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Profile;
