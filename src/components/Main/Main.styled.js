import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
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
  },
  main: {
    flexDirection: 'column',
    flex: 1,
  },
  addCurrencyText: {
    fontSize: 20,
  },
  addCurrencyTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
});

export default styles;
