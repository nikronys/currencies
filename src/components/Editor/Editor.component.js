import React, { Component } from 'react';
import {
  Picker,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as cardsActions from '../../resources/currencyList/currencyList.actions';
import Button from './components/Button';
import styles from './Editor.styled';

class Editor extends Component {
  state = {
    data: [],
    currentCurrency: '',
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker') //eslint-disable-line
      .then(res => res.json())
      .then(data => this.setState({
        data: data.data, currentCurrency: Object.values(data.data)[0].name,
      }));
  }

  onSaveClick = () => {
    const { saveCard } = this.props;
    const { data, currentCurrency } = this.state;
    saveCard(Object.values(data).find(element => element.name === currentCurrency));
    Actions.home();
  }

  render() {
    const { data, currentCurrency } = this.state;
    const {
      spinnerStyle, pickerStyle, currencyStyle, container,
    } = styles;

    if (data.length === 0) {
      return <ActivityIndicator size="large" style={spinnerStyle} />;
    }

    return (
      <View style={container}>
        <Picker
          style={pickerStyle}
          onValueChange={value => this.setState({ currentCurrency: value })}
          selectedValue={currentCurrency}
        >
          {
          Object.values(data).map((element) => {
            return (
              <Picker.Item
                key={element.id}
                value={element.name}
                label={element.name}
              />);
          })
          }
        </Picker>
        <Text style={currencyStyle}>
          {
            `Current price is ${Object.values(data).find(element => element.name === currentCurrency)
              .quotes.USD.price.toFixed(2)}$`
          }
        </Text>
        <View style={{ alignSelf: 'center', height: 40, width: 300 }}>
          <Button onPress={this.onSaveClick}>Save</Button>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  saveCard: cardsActions.saveCard,
};

Editor.propTypes = {
  saveCard: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Editor);
