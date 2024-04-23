import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Footer = () => {
  const navigation = useNavigation();

  const homePage = () => {
    navigation.navigate('UserProfile');
  };

  const activityTracker = () => {
    navigation.navigate('ActivityTracker');
  };
  const profileActivity = () => {
    navigation.navigate('Profile');
  };
  const search=()=>{
    navigation.navigate('UserSearch')
  }

  return (
    <View>
      <View style={styles.footerBox}>
        <TouchableOpacity onPress={homePage}>
          <Ionicons name="home-outline" size={24} color="#ADA4A5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={activityTracker}>
          <Feather name="activity" size={24} color="#ADA4A5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={search}>
          <LinearGradient
            colors={['#92A3FD', '#9DCEFF']}
            start={{x: 1, y: 0.5}}
            end={{x: 0, y: 0.5}}
            style={styles.circle}>
            <Feather name="search" size={28} color="#FFFFFF" />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="camera" size={24} color="#ADA4A5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={profileActivity}>
          <MaterialCommunityIcons name="account" size={34} color="#C58BF2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerBox: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
