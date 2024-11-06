import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, width, height, fontSize, textAlign }) {

  return (
    <View
      style={[
        styles.buttonContainer,
        { width: width || 320, height: height || 68 }  // Tamaño configurable por props
      ]}
    >
      <Pressable
        style={styles.button}
        onPress={onPress}
      >
        <Text
          style={[
            styles.buttonLabel,
            { fontSize: fontSize || 16, textAlign: textAlign || 'center' } // Tamaño y alineación configurables
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#EEDB5A',  // Color fijo para el fondo
    borderWidth: 3,  // Borde negro con grosor 3
    borderColor: 'black',  // Borde negro
  },
  buttonLabel: {
    fontWeight: 'bold',  // Texto en negrita
    color: '#25292e',  // Texto oscuro
  },
});
