import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Card.styled';

const Card = ({ name, children }) => {
  const { category, currency, value } = styles;
  return (
    <View style={category}>
      <Text style={currency}>{ name }</Text>
      <Text style={value}>{children}</Text>
    </View>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
