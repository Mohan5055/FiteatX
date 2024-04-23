import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Footer from './Footer';

const OntheWay = () => {
  const navigation = useNavigation();

  const backPage = () => {
    navigation.navigate('OrderPlaced');
  };

  const nextPage = () => {
    navigation.navigate('OrderCompleted');
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/Maps.png')}
      />

      <TouchableOpacity onPress={backPage}>
        <Image
          style={styles.backButton}
          source={require('../../src/assets/Images/icons/backNavs.png')}
        />
      </TouchableOpacity>

      <Image
        style={styles.carTrackImage}
        source={require('../../src/assets/Images/CarTrack.png')}
      />
      <Image
        style={styles.timetracking}
        source={require('../../src/assets/Images/TimeTracking.png')}
      />

      <View style={styles.footerBox}>
        <Text style={styles.locationText}>FiteatX</Text>
        <View style={styles.locationBox}>
          <Image
            style={styles.photoProfile}
            source={require('../../src/assets/Images/PhotoProfile.png')}
          />
          <View>
            <Text style={styles.nameText}>Mr.Kemplas</Text>
            <View style={styles.mapIcon}>
              <Image
                style={styles.mapImage}
                source={require('../../src/assets/Images/icons/Iconmaps.png')}
              />
              <Text style={styles.timeText}>25 minutes on the way</Text>
            </View>
          </View>
        </View>
        <View style={styles.footerRow}>
          <TouchableOpacity onPress={nextPage}>
            <View style={styles.callBox}>
              <Image
                style={styles.callImage}
                source={require('../../src/assets/Images/icons/CallLogo.png')}
              />
              <Text style={styles.callText}>Call</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.inbox}>
            <Image
              style={styles.inboxIcon}
              source={require('../../src/assets/Images/icons/Path.png')}
            />
          </View>
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
    backgroundColor: '#FEFEFF',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '90.5%',
    position: 'absolute',
  },
  backButton: {
    marginLeft: 30,
    marginTop: 30,
  },
  carTrackImage: {
    position: 'absolute',
    width: 172,
    height: 479,
    top: 140,
    right: 44,
  },
  timetracking: {
    position: 'absolute',
    width: 200,
    height: 60,
    right: 20,
    top: 120,
  },

  footerBox: {
    width: 350,
    height: 237,
    borderRadius: 24,
    backgroundColor: '#FAFDFF',
    position: 'absolute',
    bottom: 100,
    left: 30,
  },
  locationText: {
    fontFamily: 'Rubik',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    color: '#09051C',
    marginTop: 30,
    marginLeft: 10,
  },
  locationBox: {
    width: 323,
    height: 87,
    flexDirection: 'row',
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  photoProfile: {
    width: 64,
    height: 64,
  },
  nameText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    color: '#09051C',
    marginLeft: 20,
  },
  mapIcon: {
    flexDirection: 'row',
  },
  mapImage: {
    width: 16,
    height: 16,
    marginLeft: 20,
    marginTop: 10,
  },
  timeText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#3B3B3B',
    marginTop: 10,
    marginLeft: 10,
  },
  callBox: {
    width: 247,
    height: 68,
    borderRadius: 15,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inbox: {
    position: 'absolute',
    width: 68,
    height: 68,
    borderRadius: 15,
    right: 10,
    backgroundColor: '#92A3FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerRow: {
    flexDirection: 'row',
  },
  callImage: {
    width: 18,
    height: 18,
  },
  callText: {
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: '#92A3FD',
  },
  inboxIcon: {
    width: 20,
    height: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
});

export default OntheWay;
