import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Button} from 'native-base';
import Star from '../Star/CustomStar';
import {Rating} from 'react-native-ratings';
import usePost from '../../hooks/usePost/usePost';
import {myApi} from '../../Api';
const SCREEN_WIDTH = Dimensions.get('window').width;
const Yorumlar = ({reviews, id}) => {
  const [rating, setRating] = useState(0);
  const {data, loading, error, postData} = usePost();
  const [text, setText] = useState('');
  console.log(reviews);
  const ratingCompleted = val => {
    setRating(val);
  };

  const handleRaviews = async () => {
    if (text !== '') {
      await postData(`${myApi}/courses/add-reviews/${id}/reviews`, {
        description: text,
        rating,
      });
      setRating(0);
      setText('');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black', margin: 10}}>
      <View
        style={{
          flex: 1,
        }}>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
          <Text style={{color: '#fff'}}>Puan:</Text>
          <Rating
            style={{marginLeft: 5, marginBottom: 10}}
            type="star"
            ratingCount={5}
            startingValue={rating}
            onFinishRating={ratingCompleted}
            tintColor={'#000000'}
            imageSize={20}
          />
        </View>
        <TextInput
          value={text}
          onChangeText={setText}
          style={{
            color: '#fff',
            borderWidth: 0.5,
            borderColor: '#fff',
            height: 40,
          }}
          placeholder="Yorum Giriniz..."
          placeholderTextColor={'gray'}></TextInput>
        <Button variant="ghost" onPress={handleRaviews}>
          {loading ? (
            <Text style={{color: '#fff'}}>loading</Text>
          ) : (
            <Text style={{color: '#fff'}}>Gönder</Text>
          )}
        </Button>
      </View>

      {/* <Text style={{color: '#fff'}}>asaasasasasass</Text> */}
      {reviews.map(item => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 12,
            paddingBottom: 12,
            borderBottomWidth: 0.5,
            borderColor: 'gray',
            width: SCREEN_WIDTH,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar width={10} height={10}>
              {item.user.email?.substring(0, 3) || 'm'}
            </Avatar>
            <Text
              numberOfLines={2}
              style={{
                color: '#fff',
                marginLeft: 5,
                width: SCREEN_WIDTH * 0.73,
              }}>
              {item.description}
            </Text>
          </View>
          <View>
            <Star score={item.rating} width={60} height={12}></Star>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Yorumlar;

const styles = StyleSheet.create({});
