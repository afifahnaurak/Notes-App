import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={24}
      color={'white'}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});

export default RoundIconBtn;
