import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Star from 'react-native-star-view';
const CustomStar = ({width, height, score}) => {
  const starStyle = {
    width: width,
    height: height,
  };
  return <Star score={score} style={starStyle} />;
};

export default CustomStar;

const styles = StyleSheet.create({});
