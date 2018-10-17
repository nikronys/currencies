import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  element: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
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
    marginBottom: 14,
  },
  cardFooterName: {
    flex: 1,
    textAlign: 'center',
  },
  cardFooterPrice: {
    flex: 1,
    textAlign: 'right',
  },
  cardFooterDate: {
    flex: 1,
  },
});

export default styles;
