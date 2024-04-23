import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NextButton = ({page}) => {


  const navigation = useNavigation();

  const buyingButton = () => {
    navigation.navigate('Recommendation');
  };

  const recommendationButton = () => {
    navigation.navigate('HealthyEating');
  };

  const healthyEating = () => {
    navigation.navigate('EatingHabits');
  };
  const eatingHabits = () => {
    navigation.navigate('SignUpPage');
  };
  const signUpPage = () => {
    navigation.navigate('CreateProfile');
  };

  return (
    <View>
      {page === 'Buying' && (
        <TouchableOpacity onPress={buyingButton}>
        <Image source={require('../../src/assets/Images/buyButton.png')} />
        </TouchableOpacity>
      )}
      {page === 'Recommendation' && (
        <TouchableOpacity onPress={recommendationButton}>
          <Image
            source={require('../../src/assets/Images/recommendButton.png')}
          />
        </TouchableOpacity>
      )}
      {page === 'HealthyEating' && (
        <TouchableOpacity onPress={healthyEating}>
          <Image
            source={require('../../src/assets/Images/healthyButton.png')}
          />
        </TouchableOpacity>
      )}
      {page === 'EatingHabits' && (
        <TouchableOpacity onPress={eatingHabits}>
          <Image
            source={require('../../src/assets/Images/habitsButton.png')}
          />
        </TouchableOpacity>
      )}
      {page === 'SignUpPage' && (
        <TouchableOpacity onPress={signUpPage}>
          <Text style={{color: 'blue'}}>Register</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NextButton;
