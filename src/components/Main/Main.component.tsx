import React, { SFC } from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import TodoItem, { TodoCard } from './components/TodoItem';
import styles from './Main.styled';

interface State {
  cards: TodoCard[],
}

type Props = {
  cards: TodoCard[],
}

const Main: SFC<Props> = (props) => {
  const { cards } = props;
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
      <FlatList<TodoCard>
        showsVerticalScrollIndicator={false}
        data={cards}
        renderItem={TodoItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = (state: State) => ({
  cards: state.cards,
});

export default connect(mapStateToProps)(Main);
