import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './RootClientTabs';
import DrawerContent from '../components/DrawerContent/DrawerContent';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();

const MyDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="RootClientTabs"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          title: 'Client',
          drawerIcon: ({focused, size}) => (
            <MCIcon name="home" color={focused ? '#7cc' : 'gray'} size={size} />
          ),
          headerShown: false,
        }}></Drawer.Screen>

      {/* <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business console',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material"
              name="business"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}></Drawer.Screen> */}
    </Drawer.Navigator>
  );
};

export default MyDrawerNavigator;
