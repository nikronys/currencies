import React, { Component } from 'react';
import {
  Picker,
  ActivityIndicator,
  View,
  ScrollView,
  Text,
} from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { Actions } from 'react-native-router-flux';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as cardsActions from '../../resources/currencyList/currencyList.actions';
import Button from './components/Button';
import styles from './Editor.styled';

class Editor extends Component {
  state = {
    data: [],
    currentCurrency: '',
    description: '',
  }

  componentDidMount() {
    const { cardUnderEdition } = this.props;
    fetch('https://api.coinmarketcap.com/v2/ticker') //eslint-disable-line
      .then(res => res.json())
      .then(data => this.setState({
        data: data.data,
        description: cardUnderEdition === null
          ? ''
          : cardUnderEdition.currentCard.description,
        currentCurrency: cardUnderEdition === null
          ? Object.values(data.data)[0].name
          : cardUnderEdition.currentCard.name,
      }));
  }

  onSaveClick = () => {
    const { saveCard, editCard, cardUnderEdition } = this.props;
    const { data, currentCurrency, description } = this.state;

    if (cardUnderEdition === null) {
      const cardWithId = {
        currentCard: {
          description,
          _id: uuid(),
          ...Object.values(data).find(element => element.name === currentCurrency),
        },
        currenciesSnapshot: Object.values(data),
      };
      saveCard(cardWithId);
      Actions.home();
    } else {
      const changedCard = {
        ...cardUnderEdition,
        currentCard: {
          ...cardUnderEdition.currenciesSnapshot.find(element => element.name === currentCurrency),
          description,
          _id: cardUnderEdition.currentCard._id,
        },
      };
      editCard(changedCard);
      Actions.home();
    }
  }

  render() {
    const { data, currentCurrency, description } = this.state;
    const {
      spinnerStyle, pickerStyle, currencyStyle, container,
      descriptionStyle, buttonContainer, descriptionTitle,
    } = styles;
    const { cardUnderEdition } = this.props;

    if (data.length === 0) {
      return <ActivityIndicator size="large" style={spinnerStyle} />;
    }

    return (
      <ScrollView style={container}>
        <Text style={descriptionTitle}>Enter description:</Text>
        <AutoGrowingTextInput
          autoCorrect={false}
          value={description}
          style={descriptionStyle}
          onChangeText={value => this.setState({ description: value })}
          placeholder="Your message"
        />
        <Text style={descriptionTitle}>Choose currency:</Text>
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
        {
          cardUnderEdition === null
            ? (
              <Text style={currencyStyle}>
                {
                  `Current price is ${Object.values(data).find(element => element.name === currentCurrency)
                    .quotes.USD.price.toFixed(2)}$`
                }
              </Text>
            )
            : (
              <Text style={currencyStyle}>
                {
                  `The price was ${cardUnderEdition.currenciesSnapshot.find(element => element.name === currentCurrency).quotes.USD.price.toFixed(3)}$.`
                }
                {'\n'}
                {
                  `Current price is ${Object.values(data).find(element => element.name === currentCurrency)
                    .quotes.USD.price.toFixed(3)}$`
                }
              </Text>
            )
          }
        <View style={buttonContainer}>
          <Button isDisabled={!description} onPress={this.onSaveClick}>Save</Button>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  saveCard: cardsActions.saveCard,
  editCard: cardsActions.editCard,
};

Editor.propTypes = {
  editCard: PropTypes.func.isRequired,
  saveCard: PropTypes.func.isRequired,
  cardUnderEdition: PropTypes.shape({
    currenciesShapshot: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired,
        }),
      }),
    })),
    currentCard: PropTypes.shape({
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired,
        }),
      }),
    }),
  }),
};

Editor.defaultProps = {
  cardUnderEdition: null,
};

export default connect(null, mapDispatchToProps)(Editor);
