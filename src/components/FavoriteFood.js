import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';

const FavoriteFood = () => {
  const navigation = useNavigation();
  const nextPage = () => {
    navigation.navigate('Payment');
  };

  const notification = () => {
    navigation.navigate('Notification');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Find Your{'\n'}Favorite Food</Text>
      <TouchableOpacity style={styles.notifContainer} onPress={notification}>
        <Image
          source={require('../../src/assets/Images/icons/IconNotif.png')}
        />
      </TouchableOpacity>
      <View style={styles.searchBox}>
        <Image
          style={styles.image}
          source={require('../../src/assets/Images/icons/IconSearch.png')}
        />
        <TextInput 
           placeholder="What do you want to order?"
           placeholderTextColor="#ADA4A5"
        />
      </View>
      <Text style={styles.textType}>Type</Text>
      <View style={styles.box1}>
        <View style={styles.leftBox1}>
          <Text style={styles.normalText}>Restaurant</Text>
        </View>
        <View style={styles.rightBox1}>
          <Text style={styles.normalText}>Menu</Text>
        </View>
      </View>
      <Text style={styles.locationText}>Location</Text>
      <View style={styles.box2}>
        <View style={styles.leftBox2}>
          <Text style={styles.normalText}>1 Km</Text>
        </View>
        <View style={styles.centerBox2}>
          <Text style={styles.normalText}>10 Km</Text>
        </View>
        <View style={styles.rightBox2}>
          <Text style={styles.normalText}>10 Km</Text>
        </View>
      </View>
      <Text style={styles.textFoodItem}>Food item</Text>

      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          gap: 20,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            backgroundColor: '#d7e3f5',
          }}>
          <Text>Cake</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            backgroundColor: '#d7e3f5',
          }}>
          <Text>Soup</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            backgroundColor: '#d7e3f5',
          }}>
          <Text>Main Course</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            backgroundColor: '#d7e3f5',
          }}>
          <Text>Appetizer</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            backgroundColor: '#d7e3f5',
          }}>
          <Text>Dessert</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={nextPage}>
        <Text style={styles.textButton}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    width: 233,
    height: 82,
    marginTop: 50,
    marginLeft: 30,
    flexDirection: 'row',
    borderWidth: 1,
  },
  text: {
    fontWeight: '400',
    fontSize: 31,
    lineHeight: 40.62,
    fontFamily: 'Rubik',
    color: '#09051C',
    marginTop: 30,
    marginLeft: 30,
  },
  notifContainer: {
    width: 45,
    height: 45,
    borderColor: '#FAFDFF',
    borderRadius: 15,
    position: 'absolute',
    right: 30,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    width: 345,
    height: 50,
    borderRadius: 15,
    marginTop: 30,
    marginLeft: 30,
    alignItems:'center',
    flexDirection:'row',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: '#F7F8F8',
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  textType: {
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 20,
    marginLeft: 30,
    color: '#09051C',
  },
  box1: {
    width: 201,
    height: 44,
    marginLeft: 30,
    marginTop: 30,
    flexDirection: 'row',
  },
  leftBox1: {
    width: 106,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#d7e3f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalText: {
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.22,
    color: '#1B1B1B',
  },
  rightBox1: {
    width: 73,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#d7e3f5',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox2Text: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.22,
    color: '#1B1B1B',
  },
  locationText: {
    width: 66,
    height: 20,
    fontFamily: 'Rubik',
    fontWeight: '700',
    lineHeight: 19.65,
    fontSize: 15,
  },
  locationText: {
    marginTop: 30,
    marginLeft: 30,
    fontFamily: 'Rubik',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 19.65,
    color: '#09051C',
  },
  box2: {
    width: 262,
    height: 44,
    marginLeft: 30,
    marginTop: 30,
    flexDirection: 'row',
  },
  leftBox2: {
    width: 70,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#d7e3f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerBox2: {
    width: 70,
    height: 44,
    borderRadius: 15,
    marginLeft: 26,
    backgroundColor: '#d7e3f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox2: {
    width: 70,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#d7e3f5',
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBox2Text: {
    width: 42,
    height: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.22,
    color: '#1B1B1B',
  },
  centerBox2Text: {
    width: 42,
    height: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    lineHeight: 14.22,
    fontSize: 12,
    color: '#1B1B1B',
  },
  rightBox2Text: {
    width: 42,
    height: 14,
    fontFamily: 'Rubik',
    fontWeight: '400',
    lineHeight: 14.22,
    fontSize: 12,
    color: '#1B1B1B',
  },
  textFoodItem: {
    width: 75,
    height: 20,
    fontFamily: 'Rubik',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 19.65,
    marginLeft: 30,
    marginVertical: 30,
  },
  button: {
    width: 345,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#92A3FD',
    justifyContent: 'center',
    marginTop: 95,
    marginLeft: 30,
  },
  textButton: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#FEFEFE',
    textAlign: 'center',
  },
});

export default FavoriteFood;
