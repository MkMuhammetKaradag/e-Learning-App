import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const SignInWelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',

          paddingTop: 20,
        }}>
        <Text
          style={{
            fontSize: 26,
            color: 'black',
            fontWeight: 'bold',
          }}>
          DISCOVER E-Learning
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: 'black',
            fontWeight: 'bold',
          }}>
          IN YOUR AREA
        </Text>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end'}}>
        <View style={{marginHorizontal: 20, marginVertical: 10}}>
          <Button
            title={'SIGN IN'}
            buttonStyle={styles.styledButton}
            titleStyle={styles.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}></Button>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 30,
          }}>
          <Button
            title={'Create new Account'}
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => navigation.navigate('SignUpScreen')}></Button>
        </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  headerHeight: 40,
  styledButton: {
    backgroundColor: '#ff8c52',
    alignContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    // paddingHorizontal: 50,
    width: '100%',
  },

  buttonTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});
