import React from 'react';
import SplashScreen from './src/components/SplashScreen';
import HomeScreen from './src/components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BuyingOption from './src/components/BuyingOption';
import Recommendation from './src/components/Recommendation';
import HealthyEating from './src/components/HealthyEating';
import EatingHabits from './src/components/EatingHabits';
import SignUpPage from './src/components/SignUpPage';
import CreateProfile from './src/components/CreateProfile';
import Goal1 from './src/components/Goal1';
import Goal2 from './src/components/Goal2';
import Goal3 from './src/components/Goal3';
import LoginPage from './src/components/LoginPage';
import WelcomePage from './src/components/WelcomePage';
import FavoriteFood from './src/components/FavoriteFood';
import Payment from './src/components/Payment';
import Profile from './src/components/Profile';
import UserProfile from './src/components/UserProfile';
import UserSearch from './src/components/UserSearch';
import SelectDiet from './src/components/SelectDiet';
import OrderDetails from './src/components/OrderDetails';
import OrderTracking from './src/components/OrderTracking';
import OrderDetails2 from './src/components/OrderDetails2';
import ConfirmOrder from './src/components/ConfirmOrder';
import FinalPayment from './src/components/FinalPayment';
import Location from './src/components/Location';
import OrderPlaced from './src/components/OrderPlaced';
import OntheWay from './src/components/OntheWay';
import OrderCompleted from './src/components/OrderCompleted';
import Notification from './src/components/Notification';
import ActivityTracker from './src/components/ActivityTracker';
import DeliveryChat from './src/components/DeliveryChat';
import SupportChat from './src/components/SupportChat';
import Avtar from './src/components/Avtar';
import MyOrder from './src/components/MyOrder';
import OrderSchedule from './src/components/OrderSchedule';
import Chat from './src/components/Chat';
import ForgetPassword from './src/components/ForgetPassword';
import NewPassword from './src/components/NewPassword';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuyingOption"
          component={BuyingOption}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recommendation"
          component={Recommendation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HealthyEating"
          component={HealthyEating}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EatingHabits"
          component={EatingHabits}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Goal1"
          component={Goal1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Goal2"
          component={Goal2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Goal3"
          component={Goal3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FavoriteFood"
          component={FavoriteFood}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserSearch"
          component={UserSearch}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectDiet"
          component={SelectDiet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderTracking"
          component={OrderTracking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDetails2"
          component={OrderDetails2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmOrder"
          component={ConfirmOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FinalPayment"
          component={FinalPayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderPlaced"
          component={OrderPlaced}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OntheWay"
          component={OntheWay}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderCompleted"
          component={OrderCompleted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ActivityTracker"
          component={ActivityTracker}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeliveryChat"
          component={DeliveryChat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SupportChat"
          component={SupportChat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Avtar"
          component={Avtar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyOrder"
          component={MyOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderSchedule"
          component={OrderSchedule}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
