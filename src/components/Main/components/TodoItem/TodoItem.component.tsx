import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './TodoItem.styled';

export type TodoCard = {
  currentCard: {
    description: string,
    name: string,
    quotes: {
      USD: {
        price: number,
      },
    },
    last_updated: number
  }
};

type Props = {
  item: TodoCard;
}

const onCardClick = (cardUnderEdition: object) => () => {
  Actions.editor({ cardUnderEdition });
};

const toDateTime = (secs: number) => {
  const t = new Date(1970, 0, 1);
  t.setSeconds(secs + 10800);
  return t.toString();
};

const TodoItem = (props: Props): React.ReactElement<React.ReactChild> => {
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

export default TodoItem;
