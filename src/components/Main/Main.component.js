import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as cardsActions from '../../resources/currencyList/currencyList.actions';
import ItemList from './components/ItemList';
import styles from './Main.styled';


const Main = (props) => {
  const { cards, editCard } = props;
  const {
    addCurrencyTextContainer, addCurrencyText, container,
  } = styles;

  if (cards.length === 0) {
    return (
      <View style={addCurrencyTextContainer}>
        <Text style={addCurrencyText}>
          Add at least one currency
        </Text>
      </View>
    );
  }

  return (
    <View style={container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cards}
        renderItem={ItemList(editCard)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  cards: state.cards.cards,
});

const mapDispatchToProps = {
  editCard: cardsActions.editCard,
};

Main.propTypes = {
  editCard: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    quotes: PropTypes.shape({
      USD: PropTypes.shape({
        price: PropTypes.number.isRequired,
      }),
    }),
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
