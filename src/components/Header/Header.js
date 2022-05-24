import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title, navigation}) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          marginLeft: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MCIcon
          type="material-community"
          name="keyboard-backspace"
          color={'#fff'}
          size={30}
          onPress={() => {
            navigation.goBack();
          }}></MCIcon>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <MCIcon name={'cart'} color={'#fff'} size={32}></MCIcon>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
