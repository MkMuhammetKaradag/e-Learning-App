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
import styles from './WatchCourse.Styles';
import {myApi} from '../../../../Api';
import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Accordion from '../../../../components/Acordion/Accordin';
import useFetch from '../../../../hooks/useFetch/useFetch';
import DetailHeader from '../../../../components/DetailHeader/DetailHeader';
import Quiz from '../../../../components/Quiz/Quiz';
//import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    tabStyle={styles.tabStyle}
    style={styles.tab}
    labelStyle={styles.tabLabel}
    contentContainerStyle={styles.tabContainer}
    scrollEnabled={false}></TabBar>
);

const WatchCourseScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetchOnly(
    `${myApi}/courses/get-course/${id}`,
  );
  const [content, setContent] = React.useState();
  const [section, setSection] = React.useState(null);
  // const {loading, data, error, fetchData} = useFetch();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 1, title: 'Yorumlar'},
    {key: 2, title: 'Dersler'},
  ]);

  if (error) {
    return <Error></Error>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  const renderScene = ({route}) => {
    switch (route.key) {
      case 1:
        return <View style={{flex: 1, backgroundColor: 'red'}} />;
      case 2:
        return <View></View>;
    }
  };

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);
  console.log('section', section);
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* {section ? (
          <View>
            <VideoPlayer
              video={{
                uri:
                  section.type === 'VIDEO'
                    ? section.video_url
                    : section.type === 'QUIZ'
                    ? 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                    : '',
              }}
              thumbnail={{uri: data.course.thumbnail}}
              fullscreen={true}
              resizeMode={'stretch'}
            />
          </View>
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: data.course.thumbnail,
            }}></Image>
        )} */}
        {section ? (
          <View style={{height: 200, backgroundColor: 'red'}}>
            {section.type == 'QUIZ' && (
              <Quiz myApi={myApi} examId={section.exam}></Quiz>
            )}
          </View>
        ) : (
          <Text style={{color: '#fff', marginTop: 20}}>Guiz Değil</Text>
        )}

        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 10,
            alignSelf: 'stretch',
          }}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{width: layout.width}}
            tabBarPosition="top"
          />
        </View>
        {index == 1 && (
          <Accordion
            content={data.course.content}
            setSection={setSection}></Accordion>
        )}

        {/* <View style={styles.body_container}>
          <Text style={styles.title}>{data.course.title}</Text>
          <Text numberOfLines={2} style={styles.description}>
            {data.course.description}
          </Text>
          <Text style={styles.price}>{data.price}</Text>
        </View> */}
      </ScrollView>
      {/* 
      <Image
        style={styles.image}
        source={{
          uri: data.course.thumbnail,
        }}></Image> */}

      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Text>Cancel</Text>
        <Text>Ok</Text>
      </View> */}

      {/* <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Paper test İçin Eklendi
      </Button> */}
    </View>
  );
};

export default WatchCourseScreen;
