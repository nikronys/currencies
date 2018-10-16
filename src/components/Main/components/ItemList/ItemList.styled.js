import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  element: {
    flexDirection: 'row',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff',
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  content: {
    flexDirection: 'column',
    padding: 5,
  },
  main: {
    flexDirection: 'column',
    flex: 1,
  },
  currencyStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  descriptionStyle: {
    marginBottom: 8,
  },
});

export default styles;
