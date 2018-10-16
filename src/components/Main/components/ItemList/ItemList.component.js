import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import styles from './ItemList.styled';

const onCardClick = cardUnderEdition => () => {
  Actions.editor({ cardUnderEdition });
};

function toDateTime(secs) {
  const t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t.toString();
}

const ItemList = ({ item }) => {
  const {
    element, main, content, currencyStyle, descriptionStyle,
  } = styles;

  return (
    <TouchableOpacity onPress={onCardClick(item)}>
      <View style={element}>
        <View style={main}>
          <View style={content}>
            <Text style={descriptionStyle}>{item.description}</Text>
            <View style={currencyStyle}>
              <Text>{item.name}</Text>
              <Text>{`${item.quotes.USD.price.toFixed(2)}$`}</Text>
              <Text>{toDateTime(item.last_updated).substring(3, 21).replace(' 2018', ',')}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ItemList.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    quotes: PropTypes.shape({
      USD: PropTypes.shape({
        price: PropTypes.number.isRequired,
      }),
    }),
  }).isRequired,
};

export default ItemList;
