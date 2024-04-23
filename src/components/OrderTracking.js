import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from './CustomButton';
import Footer from './Footer';

const OrderTracking = () => {
  const navigation = useNavigation();

  const backPage = () => {
    navigation.navigate('OrderDetails');
  };

  const nextPage=()=>{
    navigation.navigate('OrderDetails2');
  }

  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={backPage}>
        <Image
          style={styles.backButton}
          source={require('../../src/assets/Images/icons/backNavs.png')}
        />
      </TouchableOpacity>
      <Text style={styles.orderText}>Order tracking</Text>

      <View style={styles.orderItem}>
        <Image
          style={styles.images}
          source={require('../../src/assets/Images/MenuPhoto1.png')}
        />
        <View style={styles.textBox}>
          <Text style={styles.boldspacyText}>Spacy fresh crab</Text>
          <Text style={styles.normalspacyText}>Waroenk kita</Text>
          <Text style={styles.rate}>₹ 200</Text>
        </View>
        <Text style={styles.dateText}>26th Jan-5:10am</Text>
      </View>

      <View style={styles.prepareBox}>
        <Text style={styles.prepareText}>How do we prepare this</Text>
        <Text style={styles.stepText}>8 steps</Text>
      </View>

      <View style={styles.stepBox}>
        <View style={styles.row}>
          <Text style={styles.steptext1}>01</Text>
          <Image
            style={styles.circle1}
            source={require('../../src/assets/Images/icons/Circle1.png')}
          />
          <Text style={styles.commonstep}>Step 1</Text>
        </View>
        <View style={styles.dotBox}>
          <View style={styles.dottedLine}></View>
          <Text style={styles.prepareStepText}>
            Your Order has been listed
          </Text>
        </View>
      </View>
      <View style={styles.stepBox}>
        <View style={styles.row}>
          <Text style={styles.steptext1}>02</Text>
          <Image
            style={styles.circle1}
            source={require('../../src/assets/Images/icons/Circle2.png')}
          />
          <Text style={styles.commonstep}>Step 2</Text>
        </View>
        <View style={styles.dotBox}>
          <View style={styles.dottedLine}></View>
          <Text style={styles.prepareStepText}>
            Your food is being served
          </Text>
        </View>
      </View>
      <View style={styles.stepBox}>
        <View style={styles.row}>
          <Text style={styles.steptext1}>03</Text>
          <Image
            style={styles.circle1}
            source={require('../../src/assets/Images/icons/Circle2.png')}
          />
          <Text style={styles.commonstep}>Step 3</Text>
        </View>
        <View style={styles.dotBox}>
          <View style={styles.dottedLine}></View>
          <Text style={styles.prepareStepText}>
            Delivery partner is assigned
          </Text>
        </View>
      </View>
      <View style={styles.stepBox}>
        <View style={styles.row}>
          <Text style={styles.steptext1}>04</Text>
          <Image
            style={styles.circle1}
            source={require('../../src/assets/Images/icons/Circle2.png')}
          />
          <Text style={styles.commonstep}>Step 4</Text>
        </View>
        <View style={styles.dotBox}>
          <View style={styles.dottedLine}></View>
          <Text style={styles.prepareStepText}>
            Food is about to reach
          </Text>
        </View>
      </View>

      <View style={styles.button}>
       <CustomButton  onPress={nextPage} title='Add to Cart'/>
       </View> 
       <View style={styles.footer}>
       <Footer/>
       </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  contentContainer:{
    flexGrow:1
  },
  backButton: {
   marginTop:30,
   marginLeft:30
  },
  orderText: {
    fontFamily: 'Rubik',
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 33,
    color: '#09051C',
    marginLeft:30,
    marginTop:30
  },

  orderItem: {
    width: 347,
    height: 103,
    borderRadius: 22,
    color: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:30,
    marginLeft:30
  },
  images: {
    width: 62,
    height: 62,
    marginLeft: 10,
  },
  textBox: {
    marginLeft: 20,
  },
  boldspacyText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    color: '#09051C',
  },
  normalspacyText: {
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#3B3B3B',
    marginTop: 5,
  },
  rate: {
    fontFamily: 'Rubik',
    fontSize: 19,
    fontWeight: '400',
    color: '#92A3FD',
    marginTop: 5,
  },
  dateText: {
    position: 'absolute',
    fontFamily: 'Rubik',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 10,
    color: '#3B3B3B',
    right: 20,
    top: 20,
  },

  prepareBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:30,
    marginTop:30,
    marginRight:30
  },
  prepareText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
 
  stepText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#7B6F72',
    marginRight: 30,
  },
  stepBox: {
    width: 315,
    height: 69,
    marginTop: 20,
    marginLeft: 30,
  },
  row: {
    flexDirection: 'row',
  },
  steptext1: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#C58BF2',
  },
  circle1: {
    marginLeft: 10,
  },
  commonstep: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#1D1617',
    marginLeft: 10,
  },
  dotBox: {
    flexDirection: 'row',
  },
  dottedLine: {
    borderLeftWidth: 1,
    borderLeftColor: '#000',
    borderStyle: 'dotted',
    height: '400%',
    marginLeft: 36,
  },
  prepareStepText: {
    marginLeft: 20,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#7B6F72',
  },
  button:{
    marginTop:100,
    
  },
  footer:{
    position:'absolute',
    bottom:0
  }
});

export default OrderTracking;
