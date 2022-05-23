import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    isAuthLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      const {user} = action.payload;
      //console.log('reducer-içi', user);
      user
        ? AsyncStorage.setItem('@USER', JSON.stringify(user))
        : AsyncStorage.removeItem('@USER');

      state.user = user;
    },
    cleanUser: state => {
      state.user = {};
    },
  },
});

export const {setUser, cleanUser} = userSlice.actions;

export default userSlice.reducer;
