import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardFrame2 = ({ children, width, height }) => {
  return (
    <View style={[styles.container, { width, height }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#000000', // borde negro exterior
    borderWidth: 3,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#EEDB5A', // color de fondo verde
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});

export default CardFrame2;
