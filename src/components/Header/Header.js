import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const SCREEN_WIDTH = Dimensions.get('window').width;
const Header = ({title, navigation, type, searchData}) => {
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
      {type == 'Search' ? (
        <TextInput
          style={{
            color: '#fff',
            borderWidth: 0.5,
            borderRadius: 3,
            borderColor: 'white',
            width: SCREEN_WIDTH * 0.6,
            height: 35,
          }}
          onSubmitEditing={e => searchData(e.nativeEvent.text)}
          placeholder="Arama"
          placeholderTextColor={'#fff'}></TextInput>
      ) : (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <MCIcon
          onPress={() => {
            navigation.navigate('ShoppingCartScreen');
          }}
          name={'cart'}
          color={'#fff'}
          size={32}></MCIcon>
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
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
