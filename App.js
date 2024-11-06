import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './screens/Page1'; // Exemple d'una altra pantalla
import Entrance from './screens/Entrance'; // Exemple d'una pantalla
import DetailsScreen from './screens/DetailsScreen'; // Exemple d'una altra pantalla
import Page2 from './screens/Page2'; // Exemple d'una altra pantalla

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrance">
        <Stack.Screen name="Entrance" component={Entrance} options={{ headerShown: false ,  animation: 'none'}}/>
        <Stack.Screen name="Page1" component={Page1} options={{ headerShown: false ,  animation: 'none'}} />
        <Stack.Screen name="Page2" component={Page2} options={{ headerShown: false ,  animation: 'none'}} />        
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
