import {configureStore} from '@reduxjs/toolkit';
import meSlice from './reducers';
export default configureStore({
  reducer: {
    me: meSlice,
  },
});
