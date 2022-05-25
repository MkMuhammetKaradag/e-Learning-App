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
    backgroundColor: 'white',
  },
  body_container: {
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  title: {fontWeight: 'bold', color: '#fff'},
  description: {fontStyle: 'italic', color: '#fff'},
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
  },
  tab: {
    paddingTop: 0,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: {fontWeight: 'bold', color: '#fff'},

  tabStyle: {width: SCREEN_WIDTH / 1, maxHeight: 45},
});
export default styles;
