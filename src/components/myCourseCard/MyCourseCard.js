import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import CustomStar from '../Star/CustomStar';

const MyCourseCard = ({course, onSelect, screenWidth, isWishList}) => {
  console.log('reviews', course.reviews);
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              course.thumbnail ||
              'https://dme2wmiz2suov.cloudfront.net/User(24043368)/CourseBundles(9270)/1106088-C_Language.jpg',
          }}></Image>
      </View>
      <View style={styles.content}>
        <View>
          <Text numberOfLines={1} style={styles.courseTitle}>
            {course.title}
          </Text>
        </View>
        <View style={{maxWidth: screenWidth * 0.8}}>
          <Text numberOfLines={2} style={styles.courseDes}>
            {course.description}
          </Text>
        </View>
        <View>
          <Text numberOfLines={1} style={styles.courseTeacher}>
            {course.instructor.firstname || 'teacher'} {'  '}
            {course.instructor.lastname || 'isim yok'}
          </Text>
        </View>
        {!isWishList ? (
          <Text
            style={{
              fontSize: 14,
              marginTop: 6,
              fontWeight: 'bold',
              color: 'gray',
            }}>
            Kursa Gidin
          </Text>
        ) : (
          <View>
            {course.reviews && (
              <View style={{flexDirection: 'row', marginTop: 3}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#E7E7E7'}}>4,5</Text>
                  <Text style={{color: '#E7E7E7', alignItems: 'center'}}>
                    <CustomStar width={80} height={15} score={4.5}></CustomStar>
                  </Text>
                </View>
                <View>
                  <Text style={{marginLeft: 5, fontSize: 10, color: '#E7E7E7'}}>
                    ({course.reviews.length})
                  </Text>
                </View>
              </View>
            )}

            <View>
              <Text style={styles.price}>{course.price || 0}₺</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MyCourseCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'gray',
    backgroundColor: 'black',
  },
  content: {
    marginLeft: 10,
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F3F3F3',
    marginTop: 3,
  },
  courseDes: {fontSize: 13, fontWeight: 'bold', color: '#F3F3F3', marginTop: 3},
  courseTeacher: {
    fontSize: 12,
    color: '#E7E7E7',
    marginTop: 3,
  },
  price: {
    marginTop: 3,
    fontWeight: 'bold',
    color: '#F3F3F3',
  },
});
