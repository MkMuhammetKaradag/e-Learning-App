import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const courseSlice = createSlice({
  name: 'counter',
  initialState: {
    courses: [],
  },
  reducers: {
    setCourseCourses: (state, action) => {
      const {courses} = action.payload;
      console.log('reducer-içi-', courses);
      state.courses = courses;
    },
    removeCourseCourses: (state, action) => {
      const {ids} = action.payload;
      console.log('reducer-içi-', ids);
      state.courses = state.courses.filter(item => !ids.includes(item._id));
    },
  },
});

export const {setCourseCourses, removeCourseCourses} = courseSlice.actions;

export default courseSlice.reducer;
