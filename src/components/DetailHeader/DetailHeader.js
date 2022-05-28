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
import {
  addCart,
  addWishlist,
  removeCart,
} from '../../context/AuthProvider/meReducers';
import onlyPost from '../../hooks/usePost/onlyPost';
import onlyDelete from '../../hooks/useDelete/onlyDelete';
import {myApi} from '../../Api';
const deviceSize = Dimensions.get('window');
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Center,
  NativeBaseProvider,
} from 'native-base';
import FIcon from 'react-native-vector-icons/Fontisto';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Example = ({likeHander, liked, cartHander, carted}) => {
  const {isOpen, onToggle} = useDisclose();
  return (
    <View>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="md"
          onPress={onToggle}
          bg="black"
          icon={<MCIcon size={20} name="dots-horizontal" color={'#fff'} />}
        />
      </HStack>
      <Box alignItems="center" minH="100">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: false,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: false,
              },
            },
          }}>
          <IconButton
            mt="4"
            variant="solid"
            bg="light.400"
            colorScheme="teal"
            borderRadius="full"
            icon={
              <Icon
                name={liked ? 'favorite' : 'favorite-border'}
                color="red"
                size={20}
                onPress={likeHander}></Icon>
            }
          />
          <IconButton
            mt="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                size={20}
                name={!carted ? 'add-shopping-cart' : 'remove-shopping-cart'}
                color={'#fff'}
                onPress={cartHander}
              />
            }
          />
        </Stagger>
      </Box>
    </View>
  );
};
const DetailHeader = ({navigation, course}) => {
  const currentValue = new Animated.Value(1);
  const [liked, setLiked] = useState(false);
  const [carted, setCarted] = useState(false);
  const {postData} = onlyPost();
  const {deleteData} = onlyDelete();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const WishList = useSelector(s => s.me.wishlist);
  const Cart = useSelector(s => s.me.cart);
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
  const cartHander = async () => {
    if (carted == false) {
      setCarted(true);
      dispatch(addCart({itemCart: course}));
      await postData(`${myApi}/users/addCourseToCart/${course._id}`);
    } else {
      setCarted(false);
      dispatch(removeCart({itemCart: course}));
      await deleteData(`${myApi}/users/removeFromCart/${course._id}`);
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
  const isCarttFn = () => setCarted(!!Cart.find(u => u._id == course._id));
  useEffect(() => {
    isWishlistFn();
    isCarttFn();
    //console.log(liked);
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
            {/* <Icon
              name={liked ? 'favorite' : 'favorite-border'}
              color="red"
              size={30}
              onPress={likeHander}></Icon> */}
            <View
              style={{
                position: 'absolute',
                //backgroundColor: '#fff',

                borderRadius: 30,
                //alignItems: 'center',
                top: 10,
                shadowOpacity: 0,
                // right: 30,
              }}>
              <Example
                likeHander={likeHander}
                liked={liked}
                cartHander={cartHander}
                carted={carted}
              />
            </View>
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
