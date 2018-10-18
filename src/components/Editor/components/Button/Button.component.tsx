import React, { ReactChild } from 'react';
import { Text, TouchableOpacity, View, GestureResponderEvent } from 'react-native';
import styles from './Button.styled';

type Props = {
  onPress: (event: GestureResponderEvent) => void,
  isDisabled: boolean,
  children: ReactChild,
 }

const Button: React.SFC<Props> = ({ onPress, children, isDisabled }) => {
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

export default Button;
