import React from 'react';
import { View, StyleSheet} from 'react-native';

const CardFrame = ({children, width, height, image}) => {
 return (
    <View style={[
      styles.container,
      { width, height }, // Tamaño personalizado
      image ? styles.image : null
    ]}>
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
    backgroundColor: '#a8d080', // color de fondo verde
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    
  },
  image: {
    justifyContent: 'flex-start', // Centra el contenido verticalmente pero se acerca al principio
    alignItems: 'center', // Centra el contenido horizontalmente
    paddingTop: 30, // Este padding mueve la imagen hacia abajo, puedes ajustarlo
  },

});

export default CardFrame;
