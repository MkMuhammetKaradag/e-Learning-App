import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
const Auth = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName="SigInWelcomeScreen">
      <Auth.Screen
        name="SigInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
        }}></Auth.Screen>

      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}></Auth.Screen>
      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}></Auth.Screen>
      {/* <Auth.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
        }}></Auth.Screen> */}
    </Auth.Navigator>
  );
};

export default AuthStack;
