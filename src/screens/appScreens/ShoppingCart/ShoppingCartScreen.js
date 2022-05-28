import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../../components/Header/Header';
import MyCourseCard from '../../../components/myCourseCard/MyCourseCard';
import {isPurchas} from '../../../context/AuthProvider/meReducers';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ShoppingCartScreen = ({navigation}) => {
  const Cart = useSelector(s => s.me.cart);
  const dispatch = useDispatch();
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
