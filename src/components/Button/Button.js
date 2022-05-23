import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Button.Styles';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={styles.container}>
      {loading ? (
        <ActivityIndicator color={'red'}></ActivityIndicator>
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
