import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Footer from './Footer';
Footer;

const Location = () => {
  const navigation = useNavigation();

  const nextPage = () => {
    navigation.navigate('OrderPlaced');
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/Maps.png')}
      />
      <View style={styles.search}>
        <Image
          style={styles.imageSearch}
          source={require('../../src/assets/Images/icons/IconSearch.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Find Your Location"
          placeholderTextColor="#ADA4A5"
        />
      </View>

      <Image
        style={styles.placeholderImage}
        source={require('../../src/assets/Images/placeholder.png')}
      />

      <View style={styles.footerBox}>
        <Text style={styles.locationText}>Your Location</Text>
        <View style={styles.locationBox}>
          <Image
            style={styles.iconLocation}
            source={require('../../src/assets/Images/icons/IconLocation2.png')}
          />
          <Text style={styles.addressText}>
            4517 Koramangla,Bengaluru,Karnataka 560029
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={nextPage}>
          <Text style={styles.textSetLocation}>Set Location</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '90.5%',
    position: 'absolute',
  },
  search: {
    width: 342,
    height: 69,
    borderRadius: 22,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageSearch: {
    marginLeft: 20,
  },
  placeholderImage: {
    width: 30,
    height: 30,
    marginTop: 250,
  },
  footerBox: {
    width: 342,
    height: 181,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 100,
  },
  locationText: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: '#3B3B3B',
    marginTop: 10,
    marginLeft: 10,
  },
  locationBox: {
    width: 303,
    height: 40,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  iconLocation: {
    width: 33,
    height: 33,
  },
  addressText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 15,
    color: '#09051C',
    marginLeft: 10,
  },
  button: {
    width: 322,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#92A3FD',
    marginTop: 30,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSetLocation: {
    fontFamily: 'Rubik',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: '#F6FAFE',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
  },
  input: {
    flex: 1,
    height: 48,
    paddingLeft: 10,
    color: '#1D1617',
  },
});

export default Location;
