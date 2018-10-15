import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#bababa',
    marginBottom: 5,
  },
  currency: {
    color: '#535fa8',
    fontSize: 20,
  },
  value: {
    color: '#7f9db9',
    fontSize: 20,
  },
});

export default styles;
