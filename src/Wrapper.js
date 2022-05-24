import React from 'react';
import Router from './Router';
import AuthProvider from './context/AuthProvider/AuthProvider';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NativeBaseProvider} from 'native-base';
export default () => {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <View style={styles.container}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor={'black'}
          />
          <Router></Router>
        </View>
      </NativeBaseProvider>
    </AuthProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
