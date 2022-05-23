import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150,
  },
  courseTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: 'gray',
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5,
  },
  address: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(52,52,52,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberOfReview: {
    color: '#fff',
    fontSize: 13,
  },
});
export default styles;
