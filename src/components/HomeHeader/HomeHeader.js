import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeHeader = ({title, navigation}) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          marginLeft: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MCIcon
          type="material-community"
          name="menu"
          color={'gray'}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
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
        <MCIcon name={'cart'} color={'gray'} size={32}></MCIcon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'gray',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});

export default HomeHeader;
