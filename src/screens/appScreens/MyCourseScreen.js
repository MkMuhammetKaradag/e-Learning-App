import {
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import {myApi} from '../../Api';
import {SafeAreaView} from 'react-native-safe-area-context';
import CourseCard from '../../components/Courses/CourseCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import {useDispatch, useSelector} from 'react-redux';
import {setCourses} from '../../context/AuthProvider/meReducers';
import MyCourseCard from '../../components/myCourseCard/MyCourseCard';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import Header from '../../components/Header/Header';

const SCREEN_WIDTH = Dimensions.get('window').width;

const MyCourseScreen = ({navigation}) => {
  //const {loading, data, error, fetchData} = useFetch();
  const dispatch = useDispatch();
  const [isWishList, setIsWishList] = useState(true);
  const Courses = useSelector(s => s.me.courses);

  // useEffect(() => {
  //   (async () => {
  //     await fetchData(`${myApi}/courses/list-purchased-courses`);
  //   })();
  // }, []);

  // useEffect(() => {
  //   if (data) {
  //     dispatch(setCourses({courses: data.courses}));
  //   }
  // }, [data]);
  // if (error) {
  //   return <Error></Error>;
  // }
  // if (loading) {
  //   return <Loading></Loading>;
  // }
  const handleProductSelect = id => {
    //console.log('girdimi', id);
    navigation.navigate('WatchCourseScreen', {id});
  };
  const renderCourse = ({item}) => (
    <View style={{paddingBottom: 10, marginTop: 10}}>
      <MyCourseCard
        course={item}
        screenWidth={SCREEN_WIDTH * 0.9}
        onSelect={() => handleProductSelect(item._id)}></MyCourseCard>
      {/* <CourseCard
        course={item}
        screenWidth={SCREEN_WIDTH * 0.9}
        onSelect={() => handleProductSelect(item._id)}></CourseCard> */}
    </View>
  );
  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'gray',
        height: 0.5,
      }}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* <View
        style={{
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsWishList(true);
            }}>
            <View
              style={{
                ...styles.wishlistButton,
                backgroundColor: isWishList ? 'blue' : 'red',
              }}>
              <Text style={styles.wishlistText}>MyCourse</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsWishList(true);
              navigation.navigate('MyWishlistScreen');
            }}>
            <View
              style={{
                ...styles.wishlistButton,
                backgroundColor: isWishList ? 'red' : 'blue',
              }}>
              <Text style={styles.wishlistText}>wishlist</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
      <Header title={'My Course'} navigation={navigation}></Header>

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
          Kursların
        </Text>
        <FlatList
          data={Courses}
          renderItem={renderCourse}
          ItemSeparatorComponent={renderSeparator}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default MyCourseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  wishlistButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  wishlistText: {
    marginLeft: 5,
    fontSize: 15,
  },
});
