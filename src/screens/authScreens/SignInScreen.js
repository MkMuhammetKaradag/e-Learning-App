import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Formik} from 'formik';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {fetchLogin, myApi} from '../../Api';
import usePost from '../../hooks/usePost/usePost';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../context/AuthProvider/userReducers';

const SignInScreen = ({navigation}) => {
  const {data, loading, error, postData} = usePost();
  const dispatch = useDispatch();
  const handleLogin = async values => {
    await postData(`${myApi}/auth/login`, {
      email: values.userName,
      password: values.password,
    });
  };

  useEffect(() => {
    if (data) {
      console.log('girdimi', data.data.user);
      dispatch(setUser({user: data.data.user}));
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../asstes/Marmara_Üniversitesi_logo.png')}></Image>
      </View>
      <Formik
        initialValues={{
          userName: '',
          password: '',
        }}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="E-posta Giriniz..."
              value={values.userName}
              onType={handleChange('userName')}
              iconName="account"></Input>

            <Input
              placeholder="Şifre Giriniz... "
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure></Input>
            <Button
              text={'Giriş Yap'}
              onPress={handleSubmit}
              loading={loading}></Button>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  logo: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  body_container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
