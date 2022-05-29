import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../../components/Header/Header';
import MyCourseCard from '../../../components/myCourseCard/MyCourseCard';
import {
  addCourses,
  clearCart,
  isPurchas,
} from '../../../context/AuthProvider/meReducers';
import usePost from '../../../hooks/usePost/usePost';
import {myApi} from '../../../Api';
import {removeCourseCourses} from '../../../context/AuthProvider/coursReducers';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ShoppingCartScreen = ({navigation}) => {
  const {data, loading, error, postData} = usePost();
  const handleBuyCourses = async values => {
    await postData(`${myApi}/Courses/purchase-course`, {
      ids: Cart.map(item => item._id),
    });
    dispatch(addCourses({courses: Cart}));

    dispatch(removeCourseCourses({ids: Cart.map(item => item._id)}));
    dispatch(clearCart());
    setTotalPrice(0);
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const Cart = useSelector(s => s.me.cart);
  const dispatch = useDispatch();
  const handleProductSelect = id => {
    dispatch(isPurchas({id: id}));
    navigation.navigate('CourseDetailScreen', {id});
  };
  useEffect(() => {
    const total = Cart.reduce((p, c) => p + c.price, 0);
    setTotalPrice(total);
  }, []);

  const renderCourse = ({item}) => (
    <View style={{paddingBottom: 20}}>
      <MyCourseCard
        course={item}
        screenWidth={SCREEN_WIDTH * 0.9}
        isWishList={true}
        onSelect={() => handleProductSelect(item._id)}></MyCourseCard>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Cart'} navigation={navigation}></Header>

      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          flex: 1,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 5,
          }}>
          Kurslar
        </Text>
        <FlatList data={Cart} renderItem={renderCourse}></FlatList>

        <Button
          title={`Satınal   {${totalPrice}}`}
          style={{color: '#fff'}}
          disabled={loading || totalPrice == 0}
          onPress={handleBuyCourses}></Button>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'black',
  },
});
