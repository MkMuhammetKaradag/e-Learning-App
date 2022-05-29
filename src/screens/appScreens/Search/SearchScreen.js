import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header/Header';
import MyCourseCard from '../../../components/myCourseCard/MyCourseCard';
import useFetch from '../../../hooks/useFetch/useFetch';
import {myApi} from '../../../Api';
import {useDispatch} from 'react-redux';
import {isPurchas} from '../../../context/AuthProvider/meReducers';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SearchScreen = ({navigation}) => {
  // const [search, setSearch] = useState('');
  const {loading, data, error, fetchData} = useFetch();
  const dispatch = useDispatch();
  const searchData = async search => {
    console.log(search);
    await fetchData(`${myApi}/courses/search-courses?search=${search}`);
  };
  const handleProductSelect = id => {
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

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 24, backgroundColor: 'black'}}>
      <Header
        searchData={searchData}
        type={'Search'}
        navigation={navigation}></Header>
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
        {data?.courses && (
          <FlatList data={data.courses} renderItem={renderCourse}></FlatList>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
