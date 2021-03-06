import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../context/AuthProvider/userReducers';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch/useFetch';
import {myApi} from '../../Api';
import {
  isPurchas,
  setCart,
  setCourses,
} from '../../context/AuthProvider/meReducers';
import CourseCard from '../../components/Courses/CourseCard';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeCard from '../../components/HomeCard/HomeCard';
import {setCourseCourses} from '../../context/AuthProvider/coursReducers';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HomeScreen = ({navigation}) => {
  const filterCourse = useSelector(s => s.course.courses);
  const dispatch = useDispatch();
  // const [filterCourse, setFilterCourse] = useState([]);
  const {
    loading: coursLoading,
    data: courseData,
    error: courseError,
    fetchData: courseFetchData,
  } = useFetch();
  const {
    loading: mycoursLoadin,
    data: mycourseData,
    error: mycourseError,
    fetchData: mycourseFetchData,
  } = useFetch();
  const {
    loading: myCartLoadin,
    data: myCartData,
    error: myCartError,
    fetchData: myCartFetchData,
  } = useFetch();
  // const Courses = useSelector(s => s.me.courses);
  useEffect(() => {
    (async () => {
      await mycourseFetchData(`${myApi}/courses/list-purchased-courses`);
      await myCartFetchData(`${myApi}/users/getCart`);
      await courseFetchData(`${myApi}/courses`);
    })();
  }, []);

  useEffect(() => {
    if (courseData) {
      // dispatch(setCourses({courses: data.courses}));

      const filterdata = courseData.courses.filter(
        c => !mycourseData.courses.map(mc => mc._id).includes(c._id),
      );
      dispatch(setCourseCourses({courses: filterdata}));
      //setFilterCourse(filterdata);
    }
  }, [courseData]);
  useEffect(() => {
    if (mycourseData) {
      console.log('her t??rl??-2', mycourseData.courses.length);
      dispatch(setCourses({courses: mycourseData.courses}));
      // console.log('hi courses-sat??n al??nanlar ');
    }
  }, [mycourseData]);
  useEffect(() => {
    if (myCartData) {
      console.log('her t??rl??-1');
      dispatch(setCart({cart: myCartData.cart}));
      // console.log('hi courses-sat??n al??nanlar ');
    }
  }, [myCartData]);

  if (courseError) {
    return (
      <Button
        title="LogOut"
        onPress={() => dispatch(setUser({user: null}))}></Button>
    );
  }
  if (coursLoading) {
    return <Loading></Loading>;
  }
  const handleProductSelect = id => {
    //console.log('girdimi', id);
    dispatch(isPurchas({id: id}));

    navigation.navigate('CourseDetailScreen', {id});
  };

  const renderCourse = ({item}) => (
    <View style={{paddingBottom: 20}}>
      <HomeCard
        course={item}
        screenWidth={SCREEN_WIDTH * 0.9}
        onSelect={() => handleProductSelect(item._id)}></HomeCard>
      {/* <CourseCard
        course={item}
        screenWidth={SCREEN_WIDTH * 0.9}
        onSelect={() => handleProductSelect(item._id)}></CourseCard> */}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader title={'Elearning'} navigation={navigation}></HomeHeader>
      <ScrollView>
        <View style={{flex: 1}}>
          <View>
            <Image
              source={{
                uri: 'https://business.udemy.com/wp-content/uploads/2021/05/skills-gaps.png',
              }}
              style={{width: SCREEN_WIDTH, height: 220}}></Image>
          </View>

          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: '#fff',
                marginLeft: 5,
                fontWeight: 'bold',
                fontSize: 18,
                marginBottom: 5,
              }}>
              Merhaba ??yiKurslar
            </Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={filterCourse.slice(0, 3)}
              renderItem={renderCourse}></FlatList>
          </View>
          <View
            style={{
              width: SCREEN_WIDTH * 0.8,
              padding: 20,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              margin: '10%',
              alignItems: 'center',
            }}>
            <Text style={{color: '#DEDEDE', fontSize: 15}}>
              Gelecek Planlar??m??z Devam Etmekte
            </Text>
            <Text style={{color: '#DEDEDE', marginTop: 5}}>
              Bizim ile ??al??????n
            </Text>
          </View>
          {filterCourse.length > 3 && (
            <View style={{marginTop: 20}}>
              <Text
                style={{
                  color: '#fff',
                  marginLeft: 5,
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginBottom: 5,
                }}>
                Kurslar
              </Text>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={filterCourse.slice(3, 6)}
                renderItem={renderCourse}></FlatList>
            </View>
          )}
        </View>
      </ScrollView>
      {/* 
      <Button
        title="LogOut"
        onPress={() => dispatch(setUser({user: null}))}></Button> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,

    backgroundColor: 'black',
  },
});
