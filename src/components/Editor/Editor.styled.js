import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionStyle: {
    height: 40,
    fontSize: 20,
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
    borderRadius: 4,
    borderColor: 'grey',
  },
  currencyStyle: {
    marginTop: 30,
    marginBottom: 50,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    height: 40,
    width: 340,
    marginBottom: 20,
  },
  descriptionTitle: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 10,
    flex: 1,
    fontSize: 20,
  },
});

export default styles;
