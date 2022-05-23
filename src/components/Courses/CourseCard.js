import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './CourseCard.Styles';

import FAIcon from 'react-native-vector-icons/FontAwesome';

const CourseCard = ({course, onSelect, screenWidth}) => {
  //console.log(course);
  return (
    // <TouchableWithoutFeedback onPress={onSelect}>
    //   <View style={styles.container}>
    //     <Image style={styles.image} source={{uri: course.thumbnail}}></Image>
    //     <View style={styles.body_container}>
    //       <Text style={styles.title}>{course.title}</Text>
    //       <Text style={styles.price}>{course.price}</Text>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
    <TouchableOpacity onPress={onSelect}>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth}}
          source={{uri: course.thumbnail}}
        />
        <View>
          <View>
            <Text style={styles.courseTitle}>{course.title}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.distance}>
              {/* <FAIcon
                name="money"
                color={'gray'}
                size={18}
                iconStyle={{
                  marginTop: 3,
                }}></FAIcon> */}
              <Text style={styles.Min}>{course.price || 0} price</Text>
            </View>

            <View style={{flex: 9, flexDirection: 'row'}}>
              <Text style={styles.address}>
                {course.instructor.firstname}
                {course.instructor.lastname}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.review}>
          <Text style={styles.average}> 1000</Text>
          <Text style={styles.numberOfReview}>4,7 reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
