import {Provider, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import userReducers from './userReducers';
import MeReducers from './meReducers';
const UserProvider = ({children}) => {
  const reducer = {
    auth: userReducers,
    me: MeReducers,
  };
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('@USER').then(userSession => {
      userSession && setUser(JSON.parse(userSession));
      setIsLoading(false);
    });
  }, []);
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
