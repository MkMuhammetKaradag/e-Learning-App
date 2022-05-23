import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {addWishlist} from '../../context/AuthProvider/meReducers';
import onlyPost from '../../hooks/usePost/onlyPost';
import onlyDelete from '../../hooks/useDelete/onlyDelete';
import {myApi} from '../../Api';
const deviceSize = Dimensions.get('window');
const DetailHeader = ({navigation, course}) => {
  const currentValue = new Animated.Value(1);
  const [liked, setLiked] = useState(false);
  const {postData} = onlyPost();
  const {deleteData} = onlyDelete();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const WishList = useSelector(s => s.me.wishlist);
  const likeHander = async () => {
    if (liked == false) {
      setVisible(true);
      setLiked(true);
      dispatch(addWishlist({itemWishlist: course}));
      await postData(`${myApi}/users/addCourseToWishlist/${course._id}`);
    } else {
      await deleteData(`${myApi}/users/removeFromWishlist/${course._id}`);
      setLiked(false);
      dispatch(addWishlist({itemWishlist: course}));
    }
  };
  useEffect(() => {
    if (liked == true) {
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          useNativeDriver: true,
          friction: 2,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);
  const isWishlistFn = () =>
    setLiked(!!WishList.find(u => u._id == course._id));
  useEffect(() => {
    isWishlistFn();
    console.log(liked);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri: course.thumbnail}}
        imageStyle={styles.image}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <MCIcon
              name="arrow-left"
              color={'black'}
              size={25}
              onPress={() => {
                navigation.goBack();
              }}></MCIcon>
          </View>
          <View style={styles.view3}>
            <Icon
              name={liked ? 'favorite' : 'favorite-border'}
              color="red"
              size={30}
              onPress={likeHander}></Icon>
          </View>
        </View>
        <View style={styles.view4}>
          {visible && (
            <Animated.View style={{transform: [{scale: currentValue}]}}>
              <Icon name="favorite" size={40} color="red"></Icon>
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  container: {height: deviceSize.height / 3},

  view1: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  view2: {
    margin: 10,
    width: 40,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  view3: {
    marginTop: 0,
    margin: 10,
    width: 40,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  view4: {marginTop: 0, alignItems: 'center', justifyContent: 'center'},
});
