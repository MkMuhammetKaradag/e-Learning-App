import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({placeholder, onType, value, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}></TextInput>
      <Icon name={iconName} size={30} />
    </View>
  );
};

export default Input;
