import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Footer from './Footer';

const ActivityTracker = () => {
  const navigation = useNavigation();

  const backPage = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.navbarBox}>
          <TouchableOpacity onPress={backPage}>
            <Image
              style={styles.backNavs}
              source={require('../../src/assets/Images/icons/backNavs.png')}
            />
          </TouchableOpacity>
          <Text style={styles.activityText}>ActivityTracker</Text>
          <Image
            style={styles.backNavs}
            source={require('../../src/assets/Images/icons/detailNav.png')}
          />
        </View>
        <View style={styles.trackBox}>
          <View style={styles.track}>
            <Text style={styles.trackText}>
              Track Your Progress Each{'\n'}Month With Photo
            </Text>
            <Image
              style={styles.learnButton}
              source={require('../../src/assets/Images/LearnMoreButton.png')}
            />
          </View>
          <Image
            style={styles.trackImage}
            source={require('../../src/assets/Images/TrackPhoto.png')}
          />
        </View>
        <Text style={styles.awarnessText}>Get Awarness with FiteatX</Text>
        <View style={styles.gymBox}>
          <Image
            style={styles.gymImages}
            source={require('../../src/assets/Images/Gymgirl1.png')}
          />
          <Image
            style={styles.gymImages}
            source={require('../../src/assets/Images/Gymgirl2.png')}
          />
        </View>
        <Text style={styles.awarnessText}>Know from Industry Experts</Text>
        <View style={styles.gymBox}>
          <Image
            style={styles.girlImages}
            source={require('../../src/assets/Images/Gymgirl1.png')}
          />
          <Image
            style={styles.girlImages}
            source={require('../../src/assets/Images/Gymgirl3.png')}
          />
          <Image
            style={styles.girlImages}
            source={require('../../src/assets/Images/Gymgirl4.png')}
          />
        </View>
        <View style={styles.foodFitness}>
          <Text style={styles.foodText}>Food and Fitness Tracker</Text>
          <Text style={styles.seeText}>See more</Text>
        </View>
        <View style={styles.footerBox}>
          <Image
            style={styles.latestImages}
            source={require('../../src/assets/Images/LatestPic.png')}
          />
          <View>
            <Text style={styles.trackText}>Drinking 300ml Water</Text>
            <Text style={styles.footerText}>About 3 minutes ago</Text>
          </View>
          <Image
            style={styles.iconMore}
            source={require('../../src/assets/Images/icons/IconMore.png')}
          />
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
    alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
  },
  navbarBox: {
    width: 315,
    height: 32,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  backNavs: {
    width: 32,
    height: 32,
  },
  activityText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
  trackBox: {
    width: 315,
    height: 137,
    borderRadius: 22,
    backgroundColor: '#ced4f5',
    marginTop: 20,
    flexDirection: 'row',
  },
  trackText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#1D1617',
    marginLeft: 10,
  },
  track: {
    marginTop: 20,
    marginLeft: 20,
  },
  learnButton: {
    width: 95,
    height: 35,
    marginTop: 20,
  },
  trackImage: {
    width: 116,
    height: 76,
    marginLeft: 20,
    marginTop: 20,
  },
  awarnessText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#1D1617',
    marginTop: 30,
    marginRight: 100,
  },
  gymBox: {
    width: 315,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  gymImages: {
    width: 150,
    height: 150,
  },
  girlImages: {
    width: 100,
    height: 100,
  },
  trackerBox: {
    width: 315,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  foodFitness: {
    width: 315,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  foodText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
  seeText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#ADA4A5',
  },
  footerBox: {
    width: 315,
    height: 80,
    borderRadius: 16,
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  latestImages: {
    marginLeft: 20,
    width: 50,
    height: 50,
  },
  iconMore: {
    width: 15,
    height: 15,
    marginLeft: 100,
    marginBottom: 40,
  },
  footerText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    color: '#A4A9AD',
    marginLeft: 10,
  },
});

export default ActivityTracker;
