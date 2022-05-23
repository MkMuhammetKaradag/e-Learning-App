import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/appScreens/HomeScreen';
import MyCourseScreen from '../screens/appScreens/MyCourseScreen';
import CourseDetailScreen from '../screens/appScreens/Course/Detail/CourseDetailScreen';
import MyWishlistScreen from '../screens/appScreens/Course/Wishlist/MyWishlistScreen';
import RootClientTabs from './RootClientTabs';
import MyDrawerNavigator from './DrawerNavigator';
import WatchCourseScreen from '../screens/appScreens/Course/WatchCourse/WatchCourseScreen';
const Tab = createBottomTabNavigator();
const CourseStack = createNativeStackNavigator();
function AppStack() {
  const App = createNativeStackNavigator();
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={MyDrawerNavigator}
        options={{
          headerShown: false,
        }}></App.Screen>
      <App.Screen
        name="MyWishlistScreen"
        component={MyWishlistScreen}
        options={{
          headerShown: false,
        }}></App.Screen>
      <App.Screen
        name="CourseDetailScreen"
        component={CourseDetailScreen}
        options={{
          headerShown: false,
        }}></App.Screen>
      <App.Screen
        name="WatchCourseScreen"
        component={WatchCourseScreen}
        options={{
          headerShown: false,
        }}></App.Screen>
    </App.Navigator>
    //     <CourseStack.Navigator>
    //       <CourseStack.Screen
    //         name="MyCourse"
    //         options={{
    //           headerShown: false,
    //         }}
    //         component={MyCourseScreen}
    //       />
    //       <CourseStack.Screen
    //         name="CourseDetailScreen"
    //         component={CourseDetailScreen}
    //       />
    //       <CourseStack.Screen
    //         name="MyWishlistScreen"
    //         component={MyWishlistScreen}
    //       />
    //     </CourseStack.Navigator>
    //   );
    // }
    // const appStack = () => {
    //   return (
    //     <Tab.Navigator>
    //       <Tab.Screen
    //         name="HomeScreen"
    //         options={{
    //           title: 'E-learning',
    //           headerStyle: {backgroundColor: '#64b5f6'},
    //           headerTitleStyle: {color: 'white'},
    //           headerTintColor: 'white',
    //           tabBarIcon: ({focused, size}) => (
    //             <EIcon
    //               name="folder-video"
    //               color={focused ? '#7cc' : 'black'}
    //               size={size}
    //             />
    //           ),
    //         }}
    //         component={HomeScreen}
    //       />
    //       <Tab.Screen
    //         name="MyCourseScreen"
    //         options={{
    //           headerShown: false,
    //           tabBarIcon: ({focused, size}) => (
    //             <FAIcon
    //               name="home"
    //               color={focused ? '#7cc' : 'black'}
    //               size={size}
    //             />
    //           ),
    //         }}
    //         component={CourseStackScreen}
    //       />
    //     </Tab.Navigator>
  );
}

export default AppStack;
