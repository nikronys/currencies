import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#5a66d1',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#5a66d1',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#5a66d1',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#5a66d1',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    opacity: 0.5,
  },
});

export default styles;
