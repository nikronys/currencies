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

const toDateTime = (secs) => {
  const t = new Date(1970, 0, 1);
  t.setSeconds(secs + 10800);
  return t.toString();
};

const ItemList = (props) => {
  const {
    element, main, content, currencyStyle,
    descriptionStyle, cardFooterName, cardFooterPrice,
    cardFooterDate,
  } = styles;
  const {
    item,
    item: {
      currentCard: {
        description, name, quotes,
        last_updated: lastUpdated,
      },
    },
  } = props;

  return (
    <TouchableOpacity onPress={onCardClick(item)}>
      <View style={element}>
        <View style={main}>
          <View style={content}>
            <Text style={descriptionStyle}>{description}</Text>
            <View style={currencyStyle}>
              <Text style={cardFooterDate}>{toDateTime(lastUpdated).substring(3, 21).replace(' 2018', ',')}</Text>
              <Text style={cardFooterName}>{name}</Text>
              <Text style={cardFooterPrice}>{`${quotes.USD.price.toFixed(3)}$`}</Text>
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
