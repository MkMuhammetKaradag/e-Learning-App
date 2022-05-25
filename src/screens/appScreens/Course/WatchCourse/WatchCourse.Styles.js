import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const deviceSize = Dimensions.get('window');
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'black',
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
  body_container: {},
  title: {fontWeight: 'bold'},
  description: {fontStyle: 'italic'},
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
  },
  tab: {
    paddingTop: 0,
    backgroundColor: 'black',
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  tabLabel: {fontWeight: 'bold', color: 'white'},

  tabStyle: {width: SCREEN_WIDTH / 2, maxHeight: 45},
});
export default styles;
