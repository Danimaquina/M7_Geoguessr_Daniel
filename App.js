import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './screens/PlayScreen'; // Pantalla de juego
import End from './screens/FinalScreen'; // Ultima pantalla
import Entrance from './screens/Entrance'; // Pantalla de entrada


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrance">
        <Stack.Screen name="Entrance" component={Entrance} options={{ headerShown: false ,  animation: 'none'}}/>
        <Stack.Screen name="PlayScreen" component={Page1} options={{ headerShown: false ,  animation: 'none'}} />
        <Stack.Screen name="FinalScreen" component={End} options={{ headerShown: false ,  animation: 'none'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
