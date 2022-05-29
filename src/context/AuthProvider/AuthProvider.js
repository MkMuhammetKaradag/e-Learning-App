import {Provider, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import userReducers from './userReducers';
import MeReducers from './meReducers';
import CourseReducers from './coursReducers';
import useFetch from '../../hooks/useFetch/useFetch';
import {myApi} from '../../Api';
const UserProvider = ({children}) => {
  const reducer = {
    auth: userReducers,
    me: MeReducers,
    course: CourseReducers,
  };
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {loading, data, error, fetchData} = useFetch();
  useEffect(() => {
    (async () => {
      await fetchData(`${myApi}/auth/me`);
    })();
  }, []);
  useEffect(() => {
    if (data) {
      AsyncStorage.getItem('@USER').then(userSession => {
        userSession && setUser(JSON.parse(userSession));
        setIsLoading(false);
      });
    }
  }, [data]);

  const userStore = configureStore({
    reducer: reducer,
    preloadedState: {
      auth: {
        user: user,
        isAuthLoading: isLoading,
      },
    },
  });
  return <Provider store={userStore}>{children}</Provider>;
};

export default UserProvider;
