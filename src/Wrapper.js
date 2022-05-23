import React from 'react';
import Router from './Router';
import AuthProvider from './context/AuthProvider/AuthProvider';
import {StatusBar, StyleSheet, View} from 'react-native';
export default () => {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={'red'}></StatusBar>
        <Router></Router>
      </View>
    </AuthProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
