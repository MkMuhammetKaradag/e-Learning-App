import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const meSlice = createSlice({
  name: 'counter',
  initialState: {
    wishlist: [],
    courses: [],
    selectCourse: null,
  },
  reducers: {
    setCourses: (state, action) => {
      const {courses} = action.payload;
      //console.log('reducer-içi-course-girdim', courses);
      // user
      //   ? AsyncStorage.setItem('@USER', JSON.stringify(course))
      //   : AsyncStorage.removeItem('@USER');

      state.courses = courses;
    },
    setWishlist: (state, action) => {
      const {wishlist} = action.payload;
      //console.log('reducer içi asa', wishlist);
      state.wishlist = wishlist;
    },
    setSelectCourse: (state, action) => {
      const {course} = action.payload;
      //console.log('reducer içi asa', wishlist);
      state.selectCourse = course;
    },
    addWishlist: (state, action) => {
      const {itemWishlist} = action.payload;
      let index = state.wishlist.findIndex(s => s._id == itemWishlist._id);
      if (index > -1) {
        console.log('reducer içi true');
        state.wishlist.splice(index, 1);
      } else {
        console.log('reducer içi false');
        state.wishlist.push(itemWishlist);
      }
    },
    cleanCourse: state => {
      state.courses = [];
    },
  },
});

export const {setCourses, cleanCourse, setWishlist, addWishlist} =
  meSlice.actions;

export default meSlice.reducer;
