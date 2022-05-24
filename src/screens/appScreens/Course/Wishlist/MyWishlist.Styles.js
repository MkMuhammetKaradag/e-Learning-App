import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'black',
  },
});
export default styles;
