import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ddd',
    margin: 5,
    padding: 6,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    height: Dimensions.get('window').height / 3,
    resizeMode: 'stretch',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  price: {
    color: '#999',
    fontWeight: 'bold',
  },
  stock: {
    color: 'red',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
