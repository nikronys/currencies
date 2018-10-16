import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Button.styled';

const Button = ({ onPress, children, description }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        disabled={description}
        onPress={onPress}
        style={description ? styles.disabledButton : styles.buttonStyle}
      >
        <Text style={styles.textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  description: PropTypes.bool.isRequired,
};

export default Button;
