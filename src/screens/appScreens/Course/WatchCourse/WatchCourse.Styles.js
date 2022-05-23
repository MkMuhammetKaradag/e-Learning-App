import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
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
    backgroundColor: '#DEDEDE',
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

  tabLabel: {fontWeight: 'bold', color: 'black'},

  tabStyle: {width: SCREEN_WIDTH / 2, maxHeight: 45},
});
export default styles;
