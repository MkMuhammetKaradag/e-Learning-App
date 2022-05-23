import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userReducers';
export default configureStore({
  reducer: {
    user: userSlice,
  },
});
