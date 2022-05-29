import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

export const meSlice = createSlice({
  name: 'counter',
  initialState: {
    wishlist: [],
    courses: [],
    selectCourse: null,
    isPurchas: false,
    cart: [],
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
    addCourses: (state, action) => {
      const {courses} = action.payload;
      state.courses.push(...courses);
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
    setCart: (state, action) => {
      const {cart} = action.payload;
      // console.log('reduceriçi-cart', cart);
      state.cart = cart;
    },
    addCart: (state, action) => {
      const {itemCart} = action.payload;
      let index = state.cart.findIndex(s => s._id == itemCart._id);
      if (index > -1) {
        console.log('reducer içi true');
        state.cart.splice(index, 1);
      } else {
        console.log('reducer içi false', itemCart);

        state.cart.push(itemCart);
      }
    },
    removeCart: (state, action) => {
      const {itemCart} = action.payload;
      let index = state.cart.findIndex(s => s._id == itemCart._id);
      if (index > -1) {
        console.log('reducer içi true');
        state.cart.splice(index, 1);
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
    isPurchas: (state, action) => {
      const {id} = action.payload;
      let index = state.courses.findIndex(s => s._id == id);
      state.isPurchas = !(index < 0);
    },
    cleanCourse: state => {
      state.courses = [];
    },
  },
});

export const {
  setCourses,
  addCourses,
  cleanCourse,
  setWishlist,
  addWishlist,
  isPurchas,
  setCart,
  addCart,
  removeCart,
  clearCart,
} = meSlice.actions;

export default meSlice.reducer;
