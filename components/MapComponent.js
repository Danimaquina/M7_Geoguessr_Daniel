import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapComponent = ({ initialRegion, onMarkerSet, firestoreMarker }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  // Callback para mover el marcador cuando el usuario toque el mapa
  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setMarkerPosition(coordinate);
    if (onMarkerSet) onMarkerSet(coordinate);
  };

  // Estilo personalizado para ocultar los nombres de las ubicaciones
  const mapStyle = [
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off" // Desactiva las etiquetas de texto (nombres de lugares)
        }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapPress}
        customMapStyle={mapStyle} // Aplica el estilo personalizado para ocultar los nombres
      >
        {/* Renderizar marcador del usuario solo si hay posición */}
        {markerPosition && <Marker coordinate={markerPosition} />}
        
        {/* Renderizar marcador de Firestore si existe */}
        {firestoreMarker && <Marker coordinate={firestoreMarker} />}
        
        {/* Dibuja la línea entre los dos marcadores */}
        {markerPosition && firestoreMarker && (
          <Polyline
            coordinates={[markerPosition, firestoreMarker]}
            strokeColor="red"
            strokeWidth={3}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
  },
  map: {
    flex: 1, // Asegura que el mapa ocupe toda el área del contenedor
  },
});

export default MapComponent;
