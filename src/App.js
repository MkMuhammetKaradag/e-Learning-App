import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import SignInScreen from './screens/authScreens/SignInScreen';
import RootNavigator from './navigation/RootNavigator';
function Loading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const userSession = true;
const isAuthLoading = true;
export default function App() {
  // const isUserPage = false ? (
  //   <Stack.Navigator>
  //     <Stack.Screen
  //       name="LoginPage"
  //       component={SignInScreen}
  //       options={{
  //         title: 'Login',
  //         headerStyle: {backgroundColor: '#64b5f6'},
  //         headerTitleStyle: {color: 'white'},
  //         headerTintColor: 'white',
  //       }}></Stack.Screen>
  //   </Stack.Navigator>
  // ) : (
  // <Tab.Navigator>
  //   <Tab.Screen
  //     name="Home"
  //     options={{
  //       title: 'E-learning',
  //       headerStyle: {backgroundColor: '#64b5f6'},
  //       headerTitleStyle: {color: 'white'},
  //       headerTintColor: 'white',
  //       tabBarIcon: ({focused, size}) => (
  //         <EIcon
  //           name="folder-video"
  //           color={focused ? '#7cc' : ''}
  //           size={size}
  //         />
  //       ),
  //     }}
  //     component={HomeScreen}
  //   />
  //   <Tab.Screen
  //     name="MyCourse"
  //     options={{
  //       headerShown: false,
  //       tabBarIcon: ({focused, size}) => (
  //         <FAIcon name="home" color={focused ? '#7cc' : ''} size={size} />
  //       ),
  //     }}
  //     component={SettingsScreen}
  //   />
  // </Tab.Navigator>
  // );
  return (
    // <NavigationContainer>
    //   {false ? <Loading></Loading> : isUserPage}
    // </NavigationContainer>
    <RootNavigator></RootNavigator>
  );
}
