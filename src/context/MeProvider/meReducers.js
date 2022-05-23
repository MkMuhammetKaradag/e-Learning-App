import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const meSlice = createSlice({
  name: 'counter',
  initialState: {
    wishlist: [],
    course: [],
  },
  reducers: {
    setCourse: (state, action) => {
      const {courses} = action.payload;
      console.log('reducer-içi-course', courses);
      // user
      //   ? AsyncStorage.setItem('@USER', JSON.stringify(course))
      //   : AsyncStorage.removeItem('@USER');

      state.course = courses;
    },
    cleanCourse: state => {
      state.course = [];
    },
  },
});

export const {setCourse, cleanCourse} = meSlice.actions;

export default meSlice.reducer;
