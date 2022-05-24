import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const HomeCard = ({course, onSelect, screenWidth}) => {
  console.log(course);
  return (
    <View style={{marginRight: 5, marginLeft: 5, maxWidth: 210}}>
      <TouchableOpacity onPress={onSelect}>
        <Image style={styles.image} source={{uri: course.thumbnail}}></Image>
      </TouchableOpacity>

      <View style={styles.bodyContainer}>
        <View>
          <Text numberOfLines={1} style={styles.courseTitle}>
            {course.title}
          </Text>
        </View>
        <View>
          <Text numberOfLines={2} style={styles.courseTeacher}>
            {course.description}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 3}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#E7E7E7'}}>4,5</Text>
            <Text style={{color: '#E7E7E7', alignItems: 'center'}}>
              {' '}
              *****{' '}
            </Text>
          </View>
          <View>
            <Text style={{marginLeft: 5, fontSize: 10, color: '#E7E7E7'}}>
              ({course.reviews.length})
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.price}>{course.price}₺</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  bodyContainer: {
    flexDirection: 'column',
  },
  image: {
    width: 210,
    height: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'black',
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F3F3F3',
    marginTop: 3,
  },
  courseTeacher: {
    fontSize: 12,
    color: '#E7E7E7',
    marginTop: 3,
  },
  distance: {
    marginTop: 3,
    flex: 4,
    flexDirection: 'row',
    borderRightColor: '#F3F3F3',
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  price: {
    marginTop: 3,
    fontWeight: 'bold',
    color: '#F3F3F3',
  },
});
