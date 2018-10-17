import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.styled';

const Button = ({ onPress, children, isDisabled }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={onPress}
        style={isDisabled ? styles.disabledButton : styles.buttonStyle}
      >
        <Text style={styles.textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Button;
