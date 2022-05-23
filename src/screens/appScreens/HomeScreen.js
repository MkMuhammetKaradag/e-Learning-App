import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../context/AuthProvider/userReducers';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch/useFetch';
import {myApi} from '../../Api';
import {setCourses} from '../../context/AuthProvider/meReducers';
import CourseCard from '../../components/Courses/CourseCard';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
const SCREEN_WIDTH = Dimensions.get('window').width;
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, data, error, fetchData} = useFetch();
  const Courses = useSelector(s => s.me.courses);
  useEffect(() => {
    (async () => {
      await fetchData(`${myApi}/courses`);
    })();
  }, []);

  useEffect(() => {
    if (data) {
      // dispatch(setCourses({courses: data.courses}));
      console.log('hi courses');
    }
  }, [data]);
  if (error) {
    return (
      <Button
        title="LogOut"
        onPress={() => dispatch(setUser({user: null}))}></Button>
    );
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
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'rgba(255,140,82,1)'}
      />
      <HomeHeader title={'Elearning'} navigation={navigation}></HomeHeader>
      <View style={{alignItems: 'center'}}>
        <FlatList data={data.courses} renderItem={renderCourse}></FlatList>
      </View>
      <Button
        title="LogOut"
        onPress={() => dispatch(setUser({user: null}))}></Button>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 50,
  },
});
