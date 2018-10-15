import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './ItemList.styled';
import Card from './components/Card';

const onCardClick = (editCard, id) => () => {
  editCard(id);
};

const ItemList = editCard => ({ item }) => {
  const { element, main, content } = styles;

  return (
    <TouchableOpacity onPress={onCardClick(editCard, item.id)}>
      <View style={element}>
        <View style={main}>
          <View style={content}>
            <Card name="Name">
              {item.name}
            </Card>
            <Card name="Symbol">
              {item.symbol}
            </Card>
            <Card name="Rank">
              {item.rank}
            </Card>
            <Card name="Price">
              {`${item.quotes.USD.price.toFixed(2)}$`}
            </Card>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ItemList.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
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

export default ItemList;
