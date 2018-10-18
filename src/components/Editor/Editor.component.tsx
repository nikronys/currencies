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
import * as cardsActions from '../../resources/currencyList/currencyList.actions';
import Button from './components/Button';
import styles from './Editor.styled';
import * as Types from './Editor.types';

class Editor extends Component<Types.Props, Types.State> {
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
        data: Object.values(data.data),
        description: cardUnderEdition === undefined
          ? ''
          : cardUnderEdition.currentCard.description,
        currentCurrency: cardUnderEdition === undefined
          ? Object.values(data.data)[0].name
          : cardUnderEdition.currentCard.name,
      }));
  }
  
  getCurrentCard = (data: Types.Data) => {
    const { currentCurrency } = this.state;
    return data.find((element: { name: string }) => element.name === currentCurrency)
  }

  getCurrentPrice = (snapshot: Types.Data) => {
    console.log(snapshot)
    const { currentCurrency } = this.state;
    return snapshot.find((element: { name: string }) => element.name === currentCurrency).quotes.USD.price.toFixed(3)
  }

  onSaveClick = (): void=> {
    const { saveCard, editCard, cardUnderEdition } = this.props;
    const currenciesSnapshot = cardUnderEdition && cardUnderEdition.currenciesSnapshot;
    const { data, description } = this.state;

    if (cardUnderEdition === undefined) {
      const cardWithId = {
        currentCard: {
          description,
          _id: uuid(),
          ...this.getCurrentCard(data),
        },
        currenciesSnapshot: Object.values(data),
      };
      saveCard(cardWithId);
      Actions.home();
    } else {
      const changedCard = {
        ...cardUnderEdition,
        currentCard: {
          ...this.getCurrentCard(currenciesSnapshot),
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
    const { cardUnderEdition  } = this.props;
    const currenciesSnapshot = cardUnderEdition && cardUnderEdition.currenciesSnapshot;

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
          onChangeText={(value: string) => this.setState({ description: value })}
          placeholder="Your message"
        />
        <Text style={descriptionTitle}>Choose currency:</Text>
        <Picker
          style={pickerStyle}
          onValueChange={value => this.setState({ currentCurrency: value })}
          selectedValue={currentCurrency}
        >
          {
          Object.values(data).map((element: { id: number, name: string }) => {
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
          cardUnderEdition === undefined
            ? (
              <Text style={currencyStyle}>
                {
                  `Current price is ${this.getCurrentPrice(data)}$`
                }
              </Text>
            )
            : (
              <Text style={currencyStyle}>
                {
                  `The price was ${this.getCurrentPrice(currenciesSnapshot)}$.`
                }
                {'\n'}
                {
                  `Current price is ${this.getCurrentPrice(currenciesSnapshot)}$`
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

export default connect(null, mapDispatchToProps)(Editor);
