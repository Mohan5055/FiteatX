import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OrderSchedule = () => {
  const navigation = useNavigation();

  const backPage = () => {
    navigation.navigate('MyOrder');
  };

  const userProfile=()=>{
    navigation.navigate('UserProfile')
  }

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.contentContainer}> 
        <View style={styles.navbar}>
          <TouchableOpacity onPress={backPage}>
            <Image
              source={require('../../src/assets/Images/icons/backNavs.png')}
            />
          </TouchableOpacity>
          <Text style={styles.myOrderText}>Order Schedules</Text>
          <Image
            source={require('../../src/assets/Images/icons/detailNav.png')}
          />
        </View>
        <View style={styles.monthBox}>
          <Image
            source={require('../../src/assets/Images/icons/ArrowLeft.png')}
          />
          <Text>May 2021</Text>
          <Image
            source={require('../../src/assets/Images/icons/IconArrow.png')}
          />
        </View>

        <View style={styles.flatBox}></View>

        <View style={styles.breakfastBox}>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>Breakfast</Text>
            <Text>2 meals | 130 calories</Text>
          </View>

          <View style={styles.itemBox}>
            <Image source={require('../../src/assets/Images/cake.png')} />
            <View>
              <Text style={styles.cakeText}>Healthy Pancake</Text>
              <Text style={styles.timeText}>07:00am</Text>
            </View>
            <Text style={styles.rateText}>500/INR</Text>
          </View>

          <View style={styles.itemBox}>
            <Image source={require('../../src/assets/Images/cup.png')} />
            <View>
              <Text style={styles.cakeText}>Fit Cool Drink</Text>
              <Text style={styles.timeText}>11:30am</Text>
            </View>
            <Text style={styles.rateText}>150/INR</Text>
          </View>
        </View>

        <View style={styles.orderBox}>
          <Text style={styles.boldText}>Lunch</Text>
          <View style={styles.order}>
            <Text>Nothing for now?</Text>
           <TouchableOpacity onPress={userProfile}>
           <Image
              style={styles.orderImage}
              source={require('../../src/assets/Images/OrderNowButton.png')}
            />
           </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breakfastBox}>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>Snacks</Text>
            <Text>2 meals | 140 calories</Text>
          </View>

          <View style={styles.itemBox}>
            <Image source={require('../../src/assets/Images/orange.png')} />
            <View>
              <Text style={styles.cakeText}>Orange Juice</Text>
              <Text style={styles.timeText}>04:30pm</Text>
            </View>
            <Text style={styles.rateText}>500/INR</Text>
          </View>

          <View style={styles.itemBox}>
            <Image source={require('../../src/assets/Images/pie.png')} />
            <View>
              <Text style={styles.cakeText}>EatX Pie</Text>
              <Text style={styles.timeText}>04:40pm</Text>
            </View>
            <Text style={styles.rateText}>150/INR</Text>
          </View>
        </View>

        <View style={styles.breakfastBox}>
          <View style={styles.textBox}>
            <Text style={styles.boldText}>Dinner</Text>
            <Text>2 meals | 120 calories</Text>
          </View>

          <View style={styles.itemBox}>
            <Image source={require('../../src/assets/Images/salads.png')} />
            <View>
              <Text style={styles.cakeText}>Salad</Text>
              <Text style={styles.timeText}>07:10pm</Text>
            </View>
            {/* <Text style={styles.rateText}>500/INR</Text> */}
          </View>

          <View style={styles.itemBox}>
            <Image source={require('../../src/assets/Images/meal.png')} />
            <View>
              <Text style={styles.cakeText}>Oatmeal</Text>
              <Text style={styles.timeText}>08:10pm</Text>
            </View>
            {/* <Text style={styles.rateText}>150/INR</Text> */}
          </View>
        </View>
        <View style={styles.calculatorBox}>
          <Text style={styles.boldText}>EatFit Calculator</Text>

          <View style={styles.box}>
            <View style={styles.caloriesBox}>
              <Text style={styles.caloriesText}>Calories</Text>
              <Image
                source={require('../../src/assets/Images/icons/CaloriesIcon.png')}
              />
              <Text style={styles.kcalText}>320kCal</Text>
            </View>
            <Image
              style={styles.progressBar1}
              source={require('../../src/assets/Images/ProgressBar1.png')}
            />
          </View>
          <View style={styles.box}>
            <View style={styles.caloriesBox}>
              <Text style={styles.caloriesText}>Proteins</Text>
              <Image
                source={require('../../src/assets/Images/icons/ProteinsIcon.png')}
              />
              <Text style={styles.kcalText}>300kCal</Text>
            </View>
            <Image
              style={styles.progressBar1}
              source={require('../../src/assets/Images/ProgressBar1.png')}
            />
          </View>
          <View style={styles.box}>
            <View style={styles.caloriesBox}>
              <Text style={styles.caloriesText}>Fats</Text>
              <Image
                source={require('../../src/assets/Images/icons/FatIcon.png')}
              />
              <Text style={styles.kcalText}>320kCal</Text>
            </View>
            <Image
              style={styles.progressBar1}
              source={require('../../src/assets/Images/ProgressBar1.png')}
            />
          </View>
        </View>
      </ScrollView>
      <Image style={styles.addButton} source={require('../../src/assets/Images/Add.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer:{
    flexGrow:1,
  },
  navbar: {
    width: 315,
    height: 34,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  myOrderText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
  monthBox: {
    width: 167,
    height: 22,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  flatBox: {
    width: 'auto',
    height: 117,
    // borderWidth: 1,
    marginTop: 30,
    alignItems: 'center',
  },

  breakfastBox: {
    width: 315,
    height: 169,
    // borderWidth: 1,
    marginTop: 20,
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  boldText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 16,
    color: '#1D1617',
  },
  itemBox: {
    height: 60,
    marginTop: 12.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cakeText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 21,
    color: '#1D1617',
    marginLeft: 10,
  },
  timeText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#7B6F72',
    marginLeft: 10,
  },
  rateText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#7B6F72',
    position: 'absolute',
    right: 10,
  },
  orderBox: {
    width: 315,
    height: 151,
    // borderWidth: 1,
    marginTop: 20,
  },
  order: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 30,
  },
  orderImage: {
    width: 110,
    height: 38,
    marginLeft: 20,
  },
  calculatorBox: {
    width: 315,
    height: 'auto',
    // borderWidth: 1,
    marginTop: 20,
  },
  box: {
    width: 315,
    height: 63,
    marginTop: 20,
    // borderWidth: 1,
  },
  caloriesBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caloriesText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    color: '#1D1617',
    marginLeft: 10,
    marginTop: 10,
  },
  kcalText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    color: '#7B6F72',
    position: 'absolute',
    right: 10,
  },
  progressBar1: {
    marginLeft: 10,
    marginTop: 10,
  },
  addButton:{
    position:'absolute',
    bottom:30,
    right:30
  }
});

export default OrderSchedule;
