import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MAIcon from 'react-native-vector-icons/MaterialIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/appScreens/HomeScreen';
import MyCourseScreen from '../screens/appScreens/MyCourseScreen';
import CourseDetailScreen from '../screens/appScreens/Course/Detail/CourseDetailScreen';
import MyWishlistScreen from '../screens/appScreens/Course/Wishlist/MyWishlistScreen';
// import ClientStack from './clientStack';

const ClientTabs = createBottomTabNavigator();

const RootClientTabs = () => {
  return (
    <ClientTabs.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        options={{
          // title: 'E-learning',
          // headerStyle: {backgroundColor: '#64b5f6'},
          // headerTitleStyle: {color: 'white'},
          // headerTintColor: 'white',
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <EIcon
              name="folder-video"
              color={focused ? '#7cc' : 'black'}
              size={size}
            />
          ),
        }}
        component={HomeScreen}></ClientTabs.Screen>
      <ClientTabs.Screen
        name="MyCourseScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <FAIcon
              name="home"
              color={focused ? '#7cc' : 'black'}
              size={size}
            />
          ),
        }}
        component={MyCourseScreen}></ClientTabs.Screen>
      <ClientTabs.Screen
        name="MyWishlistScreen"
        options={{
          title: 'wishlist',
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <MAIcon
              name="favorite"
              color={focused ? '#7cc' : 'black'}
              size={size}
            />
          ),
        }}
        component={MyWishlistScreen}></ClientTabs.Screen>
      {/* <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="view-list"
              type="material"
              color={color}
              size={size}></Icon>
          ),
        }}></ClientTabs.Screen>
      <ClientTabs.Screen
        name="MyAcountScreen"
        component={MyAcountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="person"
              type="material"
              color={color}
              size={size}></Icon>
          ),
        }}></ClientTabs.Screen> */}
    </ClientTabs.Navigator>
  );
};

export default RootClientTabs;
