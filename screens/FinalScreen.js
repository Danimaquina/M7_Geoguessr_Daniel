import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import Button from '../components/Button';
import logo from '../assets/gra.png';



const FinalScreen = ({ route, navigation }) => {
  const { finalScore } = route.params; // Recupera la puntuación final pasada como parámetro

  const handleRestart = () => {
    navigation.navigate('Entrance'); // Reinicia el juego llevándote a la pantalla inicial
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Juego Terminado!</Text>
      <Text style={styles.scoreText}>Puntuación Final: {finalScore}</Text>
      <Image source={logo} style={{ width: 200, height: 200 }} />
      <Button
        label="Volver a Jugar"
        onPress={handleRestart}
        width={200}
        height={60}
        fontSize={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1FFD4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
});

export default FinalScreen;
