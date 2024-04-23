import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const OrderCompleted = () => {
  const navigation = useNavigation();

  const userProfile = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../../src/assets/Images/Image.png')}
      />
      <Text style={styles.orderText}>Thank You!{'\n'}Order Completed</Text>
      <Text style={styles.rateText}>Please rate your last Driver</Text>

      <Image
        style={styles.star}
        source={require('../../src/assets/Images/icons/StarIcon.png')}
      />
      <View style={styles.commentBox}>
        <Image
          style={styles.editImage}
          source={require('../../src/assets/Images/icons/editIcon.png')}
        />
        <TextInput style={styles.input} placeholder="Searh Pancake" placeholderTextColor="#ADA4A5" />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.submitbutton} onPress={userProfile}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipbutton} onPress={userProfile}>
          <Text style={styles.skipText}>Skip</Text>
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
  image: {
    width: 172,
    height: 162,
    marginTop: 170,
  },
  orderText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 33,
    textAlign: 'center',
    color: '#09051C',
    marginTop: 30,
  },
  rateText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#3B3B3B',
    marginTop: 30,
  },
  star: {
    width: 254,
    height: 34,
    marginTop: 50,
  },
  commentBox: {
    width: 335,
    height: 55,
    borderRadius: 15,
    borderColor: '#E8E8E8',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    flexDirection: 'row',
    bottom: 160,
    alignItems: 'center',
    position: 'absolute',
  },
  editImage: {
    width: 24,
    height: 24,
  },
  button: {
    flexDirection: 'row',
    marginTop: 140,
  },
  submitbutton: {
    width: 233,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#92A3FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipbutton: {
    width: 82,
    height: 57,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#FEFEFF',
  },
  skipText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#92A3FD',
  },
  input: {
    flex: 1,
    height: 48,
    paddingLeft: 10,
    color: '#1D1617',
  },
});

export default OrderCompleted;
