import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../assets/styles/colors';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default Button;
