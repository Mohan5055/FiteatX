import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Footer from './Footer';

const UserSearch = () => {

  const navigation=useNavigation();

  const viewPage=()=>{
    navigation.navigate('SelectDiet');
  }

  const notificationPage=()=>{
    navigation.navigate('Notification')
  }

  return (
    <View style={styles.body}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.userBox}>
        <Text style={styles.normalText}>Welcome to Fiteat Marketplace,</Text>
        <Text style={styles.boldText}>Nitin,</Text>
      </View>
    
       <TouchableOpacity style={styles.notificationBox} onPress={notificationPage}>
       <Image
          style={styles.notification}
          source={require('../../src/assets/Images/icons/IconNotif.png')}
        />
       </TouchableOpacity>
      
      <View style={styles.searchBox}>
        <Image
          style={styles.image}
          source={require('../../src/assets/Images/icons/IconSearch.png')}
        />
        <TextInput 
           placeholder="Searh Pancake"
           placeholderTextColor="#ADA4A5"
        />
        <Image
          style={styles.filter}
          source={require('../../src/assets/Images/icons/Filter.png')}
        />
      </View>
     
        <Text style={styles.categoryText}>Category</Text>
       <ScrollView horizontal={true}>
       <View style={styles.flatItems}>
          <View style={styles.categoryBox1}>
            <Image
              style={styles.saladImage}
              source={require('../../src/assets/Images/salad.png')}
            />
            <Text style={styles.textSalad}>Salad</Text>
          </View>
          <View style={styles.categoryBox1}>
            <Image
              style={styles.saladImage}
              source={require('../../src/assets/Images/salad.png')}
            />
            <Text style={styles.textSalad}>Salad</Text>
          </View>
          <View style={styles.categoryBox1}>
            <Image
              style={styles.saladImage}
              source={require('../../src/assets/Images/salad.png')}
            />
            <Text style={styles.textSalad}>Salad</Text>
          </View>
          <View style={styles.categoryBox1}>
            <Image
              style={styles.saladImage}
              source={require('../../src/assets/Images/salad.png')}
            />
            <Text style={styles.textSalad}>Salad</Text>
          </View>
          <View style={styles.categoryBox1}>
            <Image
              style={styles.saladImage}
              source={require('../../src/assets/Images/salad.png')}
            />
            <Text style={styles.textSalad}>Salad</Text>
          </View>
          <View style={styles.categoryBox1}>
            <Image
              style={styles.saladImage}
              source={require('../../src/assets/Images/salad.png')}
            />
            <Text style={styles.textSalad}>Salad</Text>
          </View>
          <View style={styles.categoryBox1}>
            <Image
              style={styles.saladImage}
              source={require('../../src/assets/Images/salad.png')}
            />
            <Text style={styles.textSalad}>Salad</Text>
          </View>
          <View style={styles.categoryBox1}>
            <Image
              style={styles.saladImage}
              source={require('../../src/assets/Images/salad.png')}
            />
            <Text style={styles.textSalad}>Salad</Text>
          </View>
        </View>
       </ScrollView>
    
      
        <Text style={styles.dietText}>Recommendation{'\n'}for Diet</Text>
       <ScrollView horizontal={true}>
       <View style={styles.flatItems}>
          <View style={styles.flatDietBox}>
            <Image
              style={styles.pancake}
              source={require('../../src/assets/Images/pancakes.png')}
            />
            <Text style={styles.pancakeText1}>Honey Pancake</Text>
            <Text style={styles.pancakeText2}>Easy | 30mins | 180kCal</Text>
            <TouchableOpacity onPress={viewPage}>
          <Image
              style={styles.viewButton}
              source={require('../../src/assets/Images/view.png')}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.flatDietBox}>
            <Image
              style={styles.pancake}
              source={require('../../src/assets/Images/pancakes.png')}
            />
            <Text style={styles.pancakeText1}>Honey Pancake</Text>
            <Text style={styles.pancakeText2}>Easy | 30mins | 180kCal</Text>
            <TouchableOpacity onPress={viewPage}>
          <Image
              style={styles.viewButton}
              source={require('../../src/assets/Images/view.png')}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.flatDietBox}>
            <Image
              style={styles.pancake}
              source={require('../../src/assets/Images/pancakes.png')}
            />
            <Text style={styles.pancakeText1}>Honey Pancake</Text>
            <Text style={styles.pancakeText2}>Easy | 30mins | 180kCal</Text>
            <TouchableOpacity onPress={viewPage}>
          <Image
              style={styles.viewButton}
              source={require('../../src/assets/Images/view.png')}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.flatDietBox}>
            <Image
              style={styles.pancake}
              source={require('../../src/assets/Images/pancakes.png')}
            />
            <Text style={styles.pancakeText1}>Honey Pancake</Text>
            <Text style={styles.pancakeText2}>Easy | 30mins | 180kCal</Text>
          <TouchableOpacity onPress={viewPage}>
          <Image
              style={styles.viewButton}
              source={require('../../src/assets/Images/view.png')}
            />
          </TouchableOpacity>
          </View>
        </View>
       </ScrollView>
    
      <View style={styles.nearMe}>
        <Text style={styles.text}>Whats Near Me?</Text>
        <View style={styles.container}>
            <Image style={styles.imagePancake2} source={require('../../src/assets/Images/pancake2.png')} />
            <View style={styles.textbox}>
            <Text>Blueberry Pancake</Text>
            <Text>Medium | 30mins | 230kCal</Text>
            </View>
            <Image style={styles.forward} source={require('../../src/assets/Images/icons/forwardIcon.png')} />
        </View>
        <View style={styles.container}>
            <Image style={styles.imagePancake2} source={require('../../src/assets/Images/pancake2.png')} />
            <View style={styles.textbox}>
            <Text>Blueberry Pancake</Text>
            <Text>Medium | 30mins | 230kCal</Text>
            </View>
            <Image style={styles.forward} source={require('../../src/assets/Images/icons/forwardIcon.png')} />
        </View>
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
  userBox: {
    width: 196,
    height: 53,
    marginLeft: 30,
    marginVertical: 20,
  },
  normalText: {
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
  notificationBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderColor: '#DDDADA',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    marginVertical: 40,
  },
  notification: {
    width: 14,
    height: 17,
  },
  searchBox: {
    width: 345,
    height: 50,
    borderRadius: 15,
    borderColor: '#F7F8F8',
    marginTop: 30,
    marginLeft: 30,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  image: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  filter: {
    position: 'absolute',
    right: 20,
  },
  categoryText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
    marginLeft:30,
    marginTop:30
  },
  flatItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:20,
    marginTop:10,
  },
  categoryBox1: {
    width: 80,
    height: 100,
    borderRadius: 16,
    backgroundColor: '#92A3FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10
  },
  saladImage: {
    width: 40,
    height: 41,
  },
  textSalad: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#1D1617',
    marginTop: 10,
  },
  dietText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
    marginLeft:30,
    marginTop:30
  },
  flatDietBox: {
    width: 200,
    height: 239,
    borderRadius: 20,
    backgroundColor: '#92A3FD',
    alignItems: 'center',
    marginLeft:10
  },
  pancake: {
    width: 116,
    height: 80,
    marginTop: 15,
  },
  pancakeText1: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    marginTop: 15,
    color: '#1D1617',
  },
  pancakeText2: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#7B6F72',
  },
  viewButton: {
    width: 110,
    height: 38,
    borderRadius: 99,
    marginTop: 30,
  },
  nearMe:{
    width:315,
    flexGrow: 1,
    marginLeft:30,
    marginTop:30
  },
  text:{
    fontFamily:'Poppins-Bold',
    fontSize:16,
    fontWeight:'600',
    lineHeight:24,
    color:'#1D1617'
  },
  container:{
    width:345,
    height:80,
    borderRadius:16,
    backgroundColor:'#C58BF2',
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
  },
  imagePancake2:{
    marginLeft:15
  },
  textbox:{
    marginLeft:15
  },
  forward:{
    width:24,
    height:24,
    marginLeft:30
  }
});

export default UserSearch;
