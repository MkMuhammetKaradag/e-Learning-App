import {Provider, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {configureStore} from '@reduxjs/toolkit';
import reducers from './reducers';
const MeProvider = ({children}) => {
  const reducer = {
    me: reducers,
  };
  const meStore = configureStore({
    reducer,
  });
  return <Provider store={meStore}>{children}</Provider>;
};

export default MeProvider;
