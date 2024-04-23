import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Footer from './Footer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';

const UserProfile = () => {
  const navigation = useNavigation();

  const viewPage = () => {
    navigation.navigate('UserSearch');
  };

  const notificationPage = () => {
    navigation.navigate('Notification');
  };

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.box1}>
          <Text style={styles.normalText1}>Welcome Back,</Text>
          <Text style={styles.boldText}>Nitin,</Text>
          <Text style={styles.normalText2}>Karnataka,Bengaluru</Text>
        </View>
        <TouchableOpacity
          style={styles.notificationBox}
          onPress={notificationPage}>
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={20}
            color="#1D1617"
          />
        </TouchableOpacity>
        <ImageBackground
          style={styles.discountBox}
          source={require('../../src/assets/Images/Banner.png')}>
          <Text style={styles.discountText}>
            Get 50% OF{'\n'}FitEatX starting eat healthy,Preemium
          </Text>
        </ImageBackground>
        <View style={styles.container}>
          <Text style={styles.mealsText}>Today Updated Meals</Text>
          <Image
            style={styles.breakfast}
            source={require('../../src/assets/Images/Breakfast.png')}
          />
        </View>

        <View style={styles.mealBox}>
          <Image
            style={styles.nigiri}
            source={require('../../src/assets/Images/nigiri.png')}
          />
          <View>
            <Text style={styles.nigiriText}>Salman Nigiri</Text>
            <Text style={styles.timeText}>Today | 7am</Text>
          </View>

          <View style={styles.notificationBox}>
            <Octicons name="bell" size={20} color="#C58BF2" />
          </View>
        </View>

        <View style={styles.mealBox}>
          <Image
            style={styles.nigiri}
            source={require('../../src/assets/Images/glassMilk.png')}
          />
          <View>
            <Text style={styles.nigiriText}>Lowfat Milk</Text>
            <Text style={styles.timeText}>Today | Bam</Text>
          </View>
          <View style={styles.notificationBox}>
            <Octicons name="bell-slash" size={20} color="#C58BF2" />
          </View>
        </View>

        <Text style={styles.healthyText}>Find Something healthy to Eat</Text>
        <View style={styles.viewButton}>
          <Text style={styles.checkText}>Check with our categories</Text>
          <TouchableOpacity onPress={viewPage}>
            <LinearGradient
              colors={['#92A3FD', '#9DCEFF']}
              start={{x: 1, y: 0.5}}
              end={{x: 0, y: 0.5}}
              style={styles.view}>
              <Text style={styles.viewText}>View</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  box1: {
    width: 142,
    height: 71,
    marginVertical: 20,
    marginHorizontal: 30,
  },
  normalText1: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#ADA4A5',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color: '#1D1617',
  },
  normalText2: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#ADA4A5',
  },
  notificationBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    marginVertical: 40,
    backgroundColor: '#F7F8F8',
  },
  notification: {
    width: 14,
    height: 17,
  },
  discountBox: {
    width: 390,
    height: 200,
    marginHorizontal: 10,
  },
  discountText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 30,
    marginLeft: 40,
  },
  fiteatXText: {
    marginTop: 10,
  },
  updatedBox: {
    width: 300,
    height: 220,
    borderColor: '#ADA4A5',
    marginTop: 10,
    marginLeft: 30,
    borderRadius: 16,
    borderWidth: 1,
  },
  container: {
    width: 345,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  mealsText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
    marginLeft: 10,
  },
  breakfast: {
    width: 87,
    height: 30,
  },
  mealBox: {
    width: 345,
    height: 80,
    borderRadius: 16,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: 30,
  },
  nigiri: {
    width: 42,
    height: 42,
    marginLeft: 10,
  },
  nigiriText: {
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: '#1D1617',
  },
  timeText: {
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#7B6F72',
  },
  healthyBox: {
    width: 418,
    height: 246,
    marginTop: 20,
    marginLeft: 30,
  },
  healthyText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#1D1617',
    marginLeft: 35,
    marginTop: 20,
  },
  healthycontainer: {
    width: 'auto',
    height: 200,
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 10,
  },
  healthyBg: {
    width: 200,
    height: 200,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    backgroundColor: '#c1edf7',
    marginLeft: 20,
  },
  healthyfruit: {
    width: 118,
    height: 74,
    marginLeft: 75,
  },
  select: {
    width: 98,
    height: 30,
    marginLeft: 20,
    marginTop: 70,
  },
  viewButton: {
    width: 315,
    height: 57,
    borderRadius: 13,
    marginLeft: 30,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c1edf7',
  },
  view: {
    width: 70,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '80',
  },
  viewText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  checkText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: '#1D1617',
    marginLeft: 20,
  },
});

export default UserProfile;
