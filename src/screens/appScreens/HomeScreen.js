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
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../context/AuthProvider/userReducers';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch/useFetch';
import {myApi} from '../../Api';
import {isPurchas, setCourses} from '../../context/AuthProvider/meReducers';
import CourseCard from '../../components/Courses/CourseCard';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeCard from '../../components/HomeCard/HomeCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const iscoursePurchas = useSelector(s => s.me.isPurchas);
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
  const Courses = useSelector(s => s.me.courses);
  useEffect(() => {
    (async () => {
      await courseFetchData(`${myApi}/courses`);
      await mycourseFetchData(`${myApi}/courses/list-purchased-courses`);
    })();
  }, []);

  useEffect(() => {
    if (courseData) {
      // dispatch(setCourses({courses: data.courses}));
      console.log('hi courses');
    }
  }, [courseData]);
  useEffect(() => {
    if (mycourseData) {
      dispatch(setCourses({courses: mycourseData.courses}));
      // console.log('hi courses-satın alınanlar ');
    }
  }, [mycourseData]);

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
              Merhaba İyiKurslar
            </Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={courseData.courses.slice(0, 3)}
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
              Gelecek Planlarımız Devam Etmekte
            </Text>
            <Text style={{color: '#DEDEDE', marginTop: 5}}>
              Bizim ile Çalışın
            </Text>
          </View>
          {courseData.courses.length > 3 && (
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
                data={courseData.courses.slice(3, 6)}
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
