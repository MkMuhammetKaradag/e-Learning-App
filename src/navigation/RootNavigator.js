import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack';
import AppStack from './appStack';
import {useSelector} from 'react-redux';
const RootNavigator = () => {
  const userSession = useSelector(s => s.auth.user);
  const isAuthLoading = useSelector(s => s.auth.isAuthLoading);
  console.log('isLoading:', isAuthLoading);
  console.log('SESSİON', userSession);
  const Loading = () => {
    return (
      <View>
        <Text>lOADİND!!!!!</Text>
      </View>
    );
  };
  //const signedIn = true;
  const appScreens = !userSession ? (
    <AuthStack></AuthStack>
  ) : (
    <AppStack></AppStack>
  );
  return (
    <NavigationContainer>
      {isAuthLoading ? <Loading></Loading> : appScreens}
    </NavigationContainer>
  );
};

export default RootNavigator;
