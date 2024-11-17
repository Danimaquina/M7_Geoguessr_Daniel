import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Button from './Button'; // Componente Button


const PopUp = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
       <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>¿Estás seguro de que quieres salir?</Text>
          <View style={styles.buttonContainer}>
            <Button
              label="Sí"
              onPress={onConfirm}
              width={120} // Tamaño personalizado
              height={50} // Tamaño personalizado
              fontSize={18}  // Tamaño de fuente personalizado
              textAlign="center"  // Alineación personalizada
            />
            <Button
              label="No"
              onPress={onClose}
              width={120} // Tamaño personalizado
              height={50} // Tamaño personalizado
              fontSize={18}  // Tamaño de fuente personalizado
              textAlign="center"  // Alineación personalizada
            />
          </View>
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
    backgroundColor: '#4CAF50', // Fondo blanco para el modal
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',  // Color del texto de la pregunta
  },
  buttonContainer: {
    flexDirection: 'row', // Alineación horizontal para los botones
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default PopUp;