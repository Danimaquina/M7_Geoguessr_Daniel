import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import CardFrame from '../components/CardFrame';
import Button from '../components/Button';



export default function Entrance({ navigation }) {
    // Función que se llama al presionar el botón
    const handlePress = () => {
    navigation.navigate('Page1');  // Navega a la pantalla "Page1"
  };
 
    return (
        <View style={{ flex: 1, backgroundColor: '#149810', justifyContent: 'center', alignItems: 'center' }}>
          <CardFrame width={300} height={400} image={true}>
            <Image 
              source={require('../assets/Logo.png')} 
              style={styles.image} 
            />

            <Button 
                label="START" 
                onPress={handlePress} 
                width={100}  // Tamaño personalizado
                height={60}  // Tamaño personalizado
                fontSize={18}  // Tamaño de fuente personalizado
                textAlign="center"  // Alineación personalizada
            />

            </CardFrame>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      image: {
        width: 250, // Tamaño de la imagen
        height: 250, // Tamaño de la imagen
        borderRadius: 10, // Si quieres bordes redondeados
        marginBottom: 20, // Espacio debajo de la imagen
      },
    });