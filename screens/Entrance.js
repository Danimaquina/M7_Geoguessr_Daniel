import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CardFrame from '../components/CardFrame';
import Button from '../components/Button';
import PopUpInfo from '../components/PopUpInfo';  

export default function Entrance({ navigation }) {
  const [isInfoPopUpVisible, setIsInfoPopUpVisible] = useState(false);  // Estado para controlar la visibilidad del PopUp

  // Función que se llama al presionar el botón "Play"
  const handlePlayPress = () => {
    navigation.navigate('PlayScreen'); 
  };

  // Función que se llama al presionar el botón "Info"
  const handleInfoPress = () => {
    setIsInfoPopUpVisible(true); 
  };

  // Función para cerrar el PopUp
  const handlePopUpClose = () => {
    setIsInfoPopUpVisible(false);  
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#149810', justifyContent: 'center', alignItems: 'center' }}>
      <CardFrame width={300} height={450} image={true}>
        <Image 
          source={require('../assets/Logo.png')} 
          style={styles.image} 
        />

        <Button 
          label="PLAY" 
          onPress={handlePlayPress} 
          width={100}
          height={60}
          fontSize={18}
          textAlign="center"
        />

        <Button 
          label="INFO" 
          onPress={handleInfoPress} 
          width={100}
          height={60}
          fontSize={18}
          textAlign="center"
          style={{ marginTop: 20 }} 
        />

      </CardFrame>

      <PopUpInfo 
        visible={isInfoPopUpVisible} 
        onClose={handlePopUpClose}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
});
