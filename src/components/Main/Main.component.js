import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './components/Card';
import styles from './Main.styled';

const Main = (props) => {
  const { currencies } = props;
  const {
    addCurrencyTextContainer, addCurrencyText, container,
    element, main, content,
  } = styles;

  if (currencies.length === 0) {
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
        data={currencies}
        renderItem={({ item }) => (
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
        )
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  currencies: state.currencies,
});

Main.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
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

export default connect(mapStateToProps)(Main);
