import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Footer from './Footer';

const Notification = () => {
  const navigation = useNavigation();

  const backPage = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <View style={styles.body}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={backPage}>
          <Image
            source={require('../../src/assets/Images/icons/backNavs.png')}
          />
        </TouchableOpacity>
        <Text style={styles.notificationText}>Notification</Text>
        <Image
          source={require('../../src/assets/Images/icons/detailNav.png')}
        />
      </View>
      <View style={styles.box}>
        <View style={styles.childBox}>
          <Image
            source={require('../../src/assets/Images/icons/Ellipse1.png')}
          />
          <View>
            <Text style={styles.boldText}>Hey,it's time for lunch</Text>
            <Text style={styles.normalText}>About 1 minutes ago</Text>
          </View>
          <Image
            style={styles.moreIcon}
            source={require('../../src/assets/Images/icons/IconMore.png')}
          />
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.childBox}>
          <Image
            source={require('../../src/assets/Images/icons/Ellipse2.png')}
          />
          <View>
            <Text style={styles.boldText}>Don't miss your lowerbody food</Text>
            <Text style={styles.normalText}>About 3 hours ago</Text>
          </View>
          <Image
            style={styles.moreIcon}
            source={require('../../src/assets/Images/icons/IconMore.png')}
          />
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.childBox}>
          <Image
            source={require('../../src/assets/Images/icons/Ellipse3.png')}
          />
          <View>
            <Text style={styles.boldText}>
              Hey,let's add some meals for your b..
            </Text>
            <Text style={styles.normalText}>About 3 hours ago</Text>
          </View>
          <Image
            style={styles.moreIcon}
            source={require('../../src/assets/Images/icons/IconMore.png')}
          />
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.childBox}>
          <Image
            source={require('../../src/assets/Images/icons/Ellipse4.png')}
          />
          <View>
            <Text style={styles.boldText}>
              Congratulations,You have finished A..
            </Text>
            <Text style={styles.normalText}>29 May</Text>
          </View>
          <Image
            style={styles.moreIcon}
            source={require('../../src/assets/Images/icons/IconMore.png')}
          />
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.childBox}>
          <Image
            source={require('../../src/assets/Images/icons/Ellipse5.png')}
          />
          <View>
            <Text style={styles.boldText}>Hey,it's time for lunch</Text>
            <Text style={styles.normalText}>8 April</Text>
          </View>
          <Image
            style={styles.moreIcon}
            source={require('../../src/assets/Images/icons/IconMore.png')}
          />
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.childBox}>
          <Image
            source={require('../../src/assets/Images/icons/Ellipse6.png')}
          />
          <View>
            <Text style={styles.boldText}>
              Ups,You have missed your Lowerbo..
            </Text>
            <Text style={styles.normalText}>3 April</Text>
          </View>
          <Image
            style={styles.moreIcon}
            source={require('../../src/assets/Images/icons/IconMore.png')}
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
  navbar: {
    width: 315,
    height: 32,
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  notificationText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
  box: {
    width: 315,
    height: 387,
    // borderWidth:1,
    borderColor: '#DDDADA',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  childBox: {
    width: 306,
    height: 40,
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    color: '#1D1617',
    marginLeft: 10,
  },
  normalText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    color: '#7B6F72',
    marginLeft: 10,
  },
  moreIcon: {
    position: 'absolute',
    right: 10,
  },
  horizontalLine: {
    width: '100%',
    borderWidth: 0.5,
    color: '#7B6F72',
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
});

export default Notification;
