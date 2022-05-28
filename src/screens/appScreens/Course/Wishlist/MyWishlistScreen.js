import {View, Text, SafeAreaView, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import CourseCard from '../../../../components/Courses/CourseCard';
import useFetch from '../../../../hooks/useFetch/useFetch';
import {myApi} from '../../../../Api';
import Loading from '../../../../components/Loading/Loading';
import {
  isPurchas,
  setWishlist,
} from '../../../../context/AuthProvider/meReducers';
import {useDispatch, useSelector} from 'react-redux';
import styles from './MyWishlist.Styles';
import MyCourseCard from '../../../../components/myCourseCard/MyCourseCard';
import Header from '../../../../components/Header/Header';
const SCREEN_WIDTH = Dimensions.get('window').width;
const MyWishlistScreen = ({navigation}) => {
  const [isWishList, setIsWishList] = useState(true);
  const {loading, data, error, fetchData} = useFetch();
  const dispatch = useDispatch();
  const WishList = useSelector(s => s.me.wishlist);
  useEffect(() => {
    (async () => {
      await fetchData(`${myApi}/users/getWishlist`);
    })();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setWishlist({wishlist: data.wishlist}));
    }
  }, [data]);

  if (error) {
    return <Error></Error>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  const handleProductSelect = id => {
    //console.log('girdimi', id);
    dispatch(isPurchas({id: id}));
    navigation.navigate('CourseDetailScreen', {id});
  };
  const renderCourse = ({item}) => (
    <View style={{paddingBottom: 20}}>
      <MyCourseCard
        course={item}
        screenWidth={SCREEN_WIDTH * 0.9}
        isWishList={true}
        onSelect={() => handleProductSelect(item._id)}></MyCourseCard>
      {/* <CourseCard
        course={item}
        screenWidth={SCREEN_WIDTH * 0.9}
        onSelect={() => handleProductSelect(item._id)}></CourseCard> */}
    </View>
  );
  //console.log('geldi', WishList);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'İsteklistesi'} navigation={navigation}></Header>
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
        <FlatList data={WishList} renderItem={renderCourse}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default MyWishlistScreen;
