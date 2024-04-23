import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import Footer from './Footer';

const SelectDiet = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const navigation = useNavigation();

  const orderDetails = () => {
    navigation.navigate('OrderDetails');
  };

  const backPage = () => {
    navigation.navigate('UserSearch');
  };

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.navbar}>
            <TouchableOpacity onPress={backPage}>
              <Image
                source={require('../../src/assets/Images/icons/backNavs.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.navList}
              source={require('../../src/assets/Images/icons/detailNav.png')}
            />
          </View>
          <Image
            style={styles.pancakeImage}
            source={require('../../src/assets/Images/Bigpancake.png')}
          />
          <View style={styles.heartBox}>
            <Text style={styles.boldText}>FitEat X Pancake</Text>
            <Image
              style={styles.loveImage}
              source={require('../../src/assets/Images/icons/LoveIcon.png')}
            />
          </View>
        </View>
        <View style={styles.container1}>
          <Text style={styles.healthyText}>Whats healthy in it?</Text>
          <View style={styles.box}>
            <View style={styles.healthy1}>
              <Image
                source={require('../../src/assets/Images/icons/CaloriesIcon.png')}
              />
              <Text>180kCal</Text>
            </View>
            <View style={styles.healthy2}>
              <Image
                source={require('../../src/assets/Images/icons/FatIcon.png')}
              />
              <Text>30g fats</Text>
            </View>
            <View style={styles.healthy3}>
              <Image
                source={require('../../src/assets/Images/icons/ProteinsIcon.png')}
              />
              <Text>20g proteins</Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptions}>
          <Text style={styles.descriptionsText}>Descriptions</Text>

          <Text style={styles.normalText}>
            {showMore
              ? `Pancakes are some people's favorite breakfast, who doesn't like pancakes? Especially with the real honey splash on top of the pancakes, of course, everyone loves that! Besides being delicious, they are also nutritious. They can be made with various ingredients and can be served with different toppings.`
              : `Pancakes are some people's favorite breakfast, who doesn't like pancakes? Especially with the real honey splash on top of the pancakes, of course, everyone loves that!`}
          </Text>
          <TouchableOpacity onPress={toggleShowMore}>
            <Text style={styles.readMoreText}>
              {showMore ? 'Read Less...' : 'Read More...'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ingredients}>
          <View style={styles.boldIngredientText}>
            <Text style={styles.ingredientsText}>
              Ingredients we will{'\n'}use:
            </Text>
            <Text style={styles.prepareStepText}>6 items</Text>
          </View>
          <View style={styles.items}>
            <View style={styles.child1}>
              <View style={styles.background}>
                <Image
                  style={styles.childImages}
                  source={require('../../src/assets/Images/flour.png')}
                />
              </View>
              <Text style={styles.itemText}>Wheat Flour</Text>
              <Text style={styles.prepareStepText}>100gr</Text>
            </View>
            <View style={styles.child1}>
              <View style={styles.background}>
                <Image
                  style={styles.childImages}
                  source={require('../../src/assets/Images/Sugar.png')}
                />
              </View>
              <Text style={styles.itemText}>Sugar</Text>
              <Text style={styles.prepareStepText}>3 tsp</Text>
            </View>
            <View style={styles.child1}>
              <View style={styles.background}>
                <Image
                  style={styles.childImages}
                  source={require('../../src/assets/Images/BakingSoda.png')}
                />
              </View>
              <Text style={styles.itemText}>Baking Soda</Text>
              <Text style={styles.prepareStepText}>2 tsp</Text>
            </View>
          </View>
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
              Preparing all of the ingredients that{'\n'}needed
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
              Our specialist works no added{'\n'}ingredients
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
              With no shelf product used,we cater fresh{'\n'}consumption.
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
              Preparing all of the ingredients that{'\n'}needed
            </Text>
          </View>
        </View>
        <View style={styles.stepBox}>
          <View style={styles.row}>
            <Text style={styles.steptext1}>05</Text>
            <Image
              style={styles.circle1}
              source={require('../../src/assets/Images/icons/Circle2.png')}
            />
            <Text style={styles.commonstep}>Step 5</Text>
          </View>
          <View style={styles.dotBox}>
            <View style={styles.dottedLine}></View>
            <Text style={styles.prepareStepText}>
              Preparing all of the ingredients that{'\n'}needed
            </Text>
          </View>
        </View>
      </ScrollView>
      <CustomButton onPress={orderDetails} title="Add to Cart" />
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
  container: {
    width: '100%',
    height: 436,
    backgroundColor: '#92A3FD',
    alignItems: 'center',
  },
  navbar: {
    width: 330,
    height: 32,
    flexDirection: 'row',
    marginVertical: 30,
  },
  navList: {
    marginLeft: 'auto',
  },
  pancakeImage: {
    width: 288,
    height: 263,
    marginTop: 30,
  },
  heartBox: {
    width: 330,
    height: 39,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    right: 10,
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#1D1617',
    marginTop: 15,
  },
  loveImage: {
    width: 100,
    height: 39,
  },
  container1: {
    width: 301,
    height: 77,
    marginTop: 20,
    marginLeft: 30,
  },
  healthyText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  healthy1: {
    width: 81,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#92A3FD',
    marginTop: 13,
    alignItems: 'center',
    flexDirection: 'row',
  },
  healthy2: {
    width: 84,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#92A3FD',
    marginTop: 13,
    alignItems: 'center',
    flexDirection: 'row',
  },
  healthy3: {
    width: 106,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#92A3FD',
    marginTop: 13,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textCalories: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    color: '#1D1617',
    marginLeft: 10,
  },
  descriptions: {
    width: 315,
    height: 151,
    marginLeft: 30,
    marginTop: 20,
  },
  descriptionsText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#1D1617',
  },
  normalText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 10,
    color: '#7B6F72',
  },
  readMoreText: {
    color: '#007BFF',
  },

  ingredients: {
    width: 315,
    height: 185,
    marginLeft: 30,
    marginTop: 40,
  },
  boldIngredientText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredientsText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#1D1617',
  },
  items: {
    width: 270,
    height: 113,
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  child1: {
    width: 80,
    height: 113,
  },
  background: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#F7F8F8',
  },
  childImages: {
    marginTop: 15,
    marginLeft: 15,
  },
  itemText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#1D1617',
  },
  prepareText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#1D1617',
  },
  prepareBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginLeft: 30,
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
 
});

export default SelectDiet;
