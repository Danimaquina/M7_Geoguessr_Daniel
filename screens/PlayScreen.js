import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, GeoPoint } from 'firebase/firestore';
import PopUp from '../components/PopUp';
import Icon from 'react-native-vector-icons/Ionicons';
import CardFrame2 from '../components/CardFrame2';
import Button from '../components/Button';
import MapComponent from '../components/MapComponent';

// Contactamos con el FireBase
const firebaseConfig = {
  apiKey: "AIzaSyBbJYNKjQvW3gq6ypubArGdcTaHB8AbaSE",
  authDomain: "geoguasser-29130.firebaseapp.com",
  projectId: "geoguasser-29130",
  storageBucket: "geoguasser-29130.firebasestorage.app",
  messagingSenderId: "614772850434",
  appId: "1:614772850434:web:32eb2eef123e2962074c1b",
  measurementId: "G-G4WXYSSEQX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para calcular la distancia entre dos coordenadas
const getDistance = (coord1, coord2) => {
  const toRad = (value) => (value * Math.PI) / 180;

  const lat1 = coord1.latitude;
  const lon1 = coord1.longitude;
  const lat2 = coord2.latitude;
  const lon2 = coord2.longitude;

  const R = 6371; // Radio de la Tierra en kilómetros
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Retorna la distancia en kilómetros
};

// Función para calcular la puntuación
const calculateScore = (distance) => {
  if (distance <= 1) return 20;
  if (distance <= 5) return Math.floor(16 + (5 - distance));
  if (distance <= 50) return Math.floor(8 + (50 - distance) / 12.5);
  if (distance <= 150) return Math.floor(4 + (150 - distance) / 50);
  if (distance <= 500) return Math.floor(1 + (500 - distance) / 166.67);
  return 0;
};

const PlayScreen = ({ navigation }) => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false); 
  const [coordenadas, setCoordenadas] = useState(null); // Donde se guarda el GeoPoint del firebase
  const [markerPosition, setMarkerPosition] = useState(null);
  const [buttonLabel, setButtonLabel] = useState('MARK');
  const [titulo, setTitulo] = useState(''); // Donde se guarda el titulo de cada nivel
  const [distance, setDistance] = useState(null);
  const [levelScore, setLevelScore] = useState(null); // Puntuacion conseguida en ese nivel
  const [finalScore, setFinalScore] = useState(0); // Score final
  const [currentLevel, setCurrentLevel] = useState(1); // Nivel inicial

  // Funcion para conseguir la informacion de Firebase deseada
  useEffect(() => {
    const fetchGeoPoint = async () => {
      const levelKey = `${currentLevel}P`; // Generar clave del nivel actual
      const docRef = doc(db, 'Preguntas', levelKey);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitulo(data.title || 'Sin título');
        const geoPoint = data.GeoPoint;

        if (geoPoint instanceof GeoPoint) {
          setCoordenadas(geoPoint);
        }
      } else {
        setTitulo('Documento no encontrado');
      }
    };

    fetchGeoPoint();
  }, [currentLevel]); // Recargar al cambiar de nivel

  // Aqui es donde aparezeremos al empezar la partida
  const initialRegion = {
    latitude: 41.3851,
    longitude: 2.1734,
    latitudeDelta: 15,
    longitudeDelta: 5,
  };

  const handleMarkerSet = (coordinate) => {
    setMarkerPosition(coordinate);
  };

  // Funcion que controla el boton MarK y su transformacion en Next y los nuevos campos que aparecen
  const handleMarkClick = () => {
    if (buttonLabel === 'MARK') {
      if (coordenadas && markerPosition) {
        const calculatedDistance = getDistance(markerPosition, coordenadas);
        const calculatedScore = calculateScore(calculatedDistance);

        setDistance(calculatedDistance.toFixed(2));
        setLevelScore(calculatedScore);
        setFinalScore((prev) => prev + calculatedScore);
        setButtonLabel('NEXT');
      } else {
        console.log('Por favor, coloca un marcador primero.');
      }
    } else if (buttonLabel === 'NEXT') {
      if (currentLevel < 5) {
        // Cambiar al siguiente nivel
        setCurrentLevel((prev) => prev + 1);
        setButtonLabel('MARK'); // Resetear el botón
        setDistance(null);
        setLevelScore(null);
        setMarkerPosition(null); // Resetear el marcador del usuario
      } else {
        // Redirigir a la pantalla final
        navigation.navigate('FinalScreen', { finalScore });
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-circle"
          size={40}
          color="#FFFFFF"
          onPress={() => setIsPopUpVisible(true)}
          style={styles.icon}
        />
        <CardFrame2 width="80%" height={60}>
          <Text style={styles.questionText}>{titulo}</Text>
        </CardFrame2>
      </View>

      <View style={styles.body}>
        <MapComponent
          initialRegion={initialRegion}
          onMarkerSet={handleMarkerSet}
          firestoreMarker={buttonLabel === 'NEXT' && coordenadas
            ? { latitude: coordenadas.latitude, longitude: coordenadas.longitude }
            : null}
        />
      </View>

      <View style={styles.footer}>
        <Button
          label={buttonLabel}
          onPress={handleMarkClick}
          width={200}
          height={60}
          fontSize={20}
        />
        {distance && levelScore !== null && (
          <>
            <Text style={styles.footerTextLarge}>Distancia: {distance} km</Text>
            <Text style={styles.footerTextLarge}>Puntuación: {levelScore}</Text>
          </>
        )}
      </View>

      <PopUp
        visible={isPopUpVisible}
        onClose={() => setIsPopUpVisible(false)}
        onConfirm={() => navigation.navigate('Entrance')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1FFD4',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 5,
  },
  body: {
    flex: 5,
    borderTopWidth: 3,
    borderTopColor: 'black',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
  },
  footerTextLarge: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default PlayScreen;
