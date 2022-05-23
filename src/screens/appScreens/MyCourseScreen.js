import {
  Button,
  Dimensions,
  FlatList,
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

const SCREEN_WIDTH = Dimensions.get('window').width;

const MyCourseScreen = ({navigation}) => {
  const {loading, data, error, fetchData} = useFetch();
  const dispatch = useDispatch();
  const [isWishList, setIsWishList] = useState(true);
  const Courses = useSelector(s => s.me.courses);

  useEffect(() => {
    (async () => {
      await fetchData(`${myApi}/courses/list-purchased-courses`);
    })();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setCourses({courses: data.courses}));
    }
  }, [data]);
  if (error) {
    return <Error></Error>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  const handleProductSelect = id => {
    console.log('girdimi', id);
    navigation.navigate('CourseDetailScreen', {id});
  };
  const renderCourse = ({item}) => (
    <View style={{paddingBottom: 20}}>
      <CourseCard
        course={item}
        screenWidth={SCREEN_WIDTH * 0.9}
        onSelect={() => handleProductSelect(item._id)}></CourseCard>
    </View>
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

      <View style={{alignItems: 'center'}}>
        <FlatList data={Courses} renderItem={renderCourse}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default MyCourseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
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
