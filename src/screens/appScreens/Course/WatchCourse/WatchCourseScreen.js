import {
  View,
  Text,
  Image,
  useWindowDimensions,
  SafeAreaView,
  ScrollView,
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
//import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'gray'}}
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
    {key: 1, title: 'First'},
    {key: 2, title: 'Second'},
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
  console.log('section', section);
  return (
    <SafeAreaView style={styles.container}>
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
      {/* <DetailHeader course={data.course} navigation={navigation}></DetailHeader> */}
      {section && (
        <VideoPlayer
          video={{
            uri:
              section.type === 'VIDEO'
                ? section.video_url
                : section.type === 'QUIZ'
                ? 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                : '',
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: data.course.thumbnail}}
        />
      )}

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Text>Cancel</Text>
        <Text>Ok</Text>
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{width: layout.width}}
      />

      {/* <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Paper test İçin Eklendi
      </Button> */}
    </SafeAreaView>
  );
};

export default WatchCourseScreen;
