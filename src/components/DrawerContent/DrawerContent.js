import {
  View,
  Text,
  StyleSheet,
  Switch,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar} from 'native-base';
// import {Icon, Avatar, Button} from 'react-native-elements';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../context/AuthProvider/userReducers';
const DrawerContent = props => {
  const dispatch = useDispatch();
  const user = useSelector(s => s.auth.user);

  const SignOut = async () => {
    console.log('çıkış yapıldı');
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: 'gray'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Avatar size={'xl'} backgroundColor={'black'}>
              {user.firstname?.substring(0, 1) || 'm'}
            </Avatar>

            <View style={{paddingLeft: 20}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'black',
                }}>
                {user.firstname}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                }}>
                {user.email}
              </Text>
            </View>
          </View>
        </View>

        <DrawerItemList {...props}></DrawerItemList>
        <DrawerItem
          label={'Payment'}
          icon={({color, size}) => (
            <MCIcon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}></MCIcon>
          )}></DrawerItem>
        <DrawerItem
          label={'Promotions'}
          icon={({color, size}) => (
            <MCIcon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}></MCIcon>
          )}></DrawerItem>
        <DrawerItem
          label={'Settings'}
          icon={({color, size}) => (
            <MCIcon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}></MCIcon>
          )}></DrawerItem>
        <DrawerItem
          label={'Help'}
          icon={({color, size}) => (
            <MCIcon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}></MCIcon>
          )}></DrawerItem>
        {/* <View style={{borderTopWidth: 1, borderTopColor: colors.grey5}}>
          <Text style={styles.preferences}> Preferences</Text>
          <View style={styles.switchText}>
            <Text style={styles.darkThemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}></Switch>
            </View>
          </View>
        </View> */}
      </DrawerContentScrollView>

      <DrawerItem
        label={'Sign Out'}
        icon={({color, size}) => (
          <MCIcon
            name="logout-variant"
            color={color}
            size={size}
            onPress={() => {
              SignOut();
            }}></MCIcon>
        )}
        onPress={() => dispatch(setUser({user: null}))}></DrawerItem>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: 'gray',
  },
  preferences: {
    fontSize: 16,
    color: 'gray',
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkThemeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    paddingTop: 10,
    paddingLeft: 0,
  },
});
export default DrawerContent;
