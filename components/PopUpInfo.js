import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Button from './Button'; // Importamos el componente Button

const InfoPopUp = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            ¡Bienvenido al juego! Aquí están las reglas básicas:
          </Text>
          <Text style={styles.modalText}>
            1. Adivina la ubicación de un punto en el mapa.
          </Text>
          <Text style={styles.modalText}>
            2. Cuanto más cerca estés de la ubicación correcta, más puntos obtienes.
          </Text>
          <Text style={styles.modalText}>
            3. Cada ronda tiene una puntuación basada en la distancia.
          </Text>
          <Text style={styles.modalText}>
            ¡Intenta obtener la mejor puntuación!
          </Text>

          <Button
            label="Cerrar"
            onPress={onClose}
            width={120} // Tamaño personalizado
            height={50} // Tamaño personalizado
            fontSize={18}  // Tamaño de fuente personalizado
            textAlign="center"  // Alineación personalizada
            style={{ marginTop: 20 }}  // Espacio entre el texto y el botón
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo translúcido
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#4CAF50', // Fondo para el modal
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',  // Color del texto
    textAlign: 'center',  // Alineación del texto
  },
});

export default InfoPopUp;
