import {
  View,
  Text,
  Image,
  useWindowDimensions,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetchOnly from '../../../../hooks/useFetch/useFetchOnly';
import styles from './CourseDetail.Styles';
import {myApi} from '../../../../Api';
import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Accordion from '../../../../components/Acordion/Accordin';
import useFetch from '../../../../hooks/useFetch/useFetch';
import DetailHeader from '../../../../components/DetailHeader/DetailHeader';
import {useDispatch, useSelector} from 'react-redux';
import {isPurchas} from '../../../../context/AuthProvider/meReducers';
// const SecondRoute = () => (
//   <View style={{flex: 1}}>
//     <Accordion></Accordion>
//   </View>
// );
// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#DEDEDE'}}
    tabStyle={styles.tabStyle}
    style={styles.tab}
    labelStyle={styles.tabLabel}
    contentContainerStyle={styles.tabContainer}
    scrollEnabled={true}></TabBar>
);

const CourseDetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetchOnly(
    `${myApi}/courses/get-course-detail/${id}`,
  );
  const [content, setContent] = React.useState();
  const [section, setSection] = React.useState();
  // const {loading, data, error, fetchData} = useFetch();
  const layout = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [routes] = useState([{key: 1, title: 'Content'}]);
  const iscoursePurchas = useSelector(s => s.me.isPurchas);

  if (error) {
    return <Error></Error>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (iscoursePurchas) {
    navigation.navigate('WatchCourseScreen', {id});
  }

  const renderScene = ({route}) => {
    switch (route.key) {
      case 1:
        return (
          <Accordion
            content={data.course.content}
            setSection={setSection}></Accordion>
        );
    }
  };

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);

  return (
    !iscoursePurchas && (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <View>
            {/* <Card>
        {/* <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        /> 
        <Card.Content>
          <Title>{data.course.title}</Title>
          <Paragraph numberOfLines={2}>{data.course.description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: data.course.thumbnail}} />

        <View
          style={{
            flex: 1,
          }}>
          <Text>Cancel</Text>
          <Text>Ok</Text>
        </View>
      </Card> */}
            <DetailHeader
              course={data.course}
              navigation={navigation}></DetailHeader>
            {/* <Image
        style={styles.image}
        source={{
          uri: data.course.thumbnail,
        }}></Image> */}
            <View style={styles.body_container}>
              <Text style={styles.title}>{data.course.title}</Text>
              <Text numberOfLines={2} style={styles.description}>
                {data.course.description}
              </Text>
              <Text style={styles.price}>{data.price}</Text>
            </View>
          </View>
        </ScrollView>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={layout}
          sceneContainerStyle={{flex: 1}}
          // tabBarPosition="top"
        />
      </View>
    )
  );
};

export default CourseDetailScreen;
