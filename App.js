import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './src/Screens/HomePage';
import AsteroidData from './src/Screens/AsteroidData';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomePage}
        />
        <Stack.Screen
          name="AsteroidData"
          options={{
            headerTitle: 'Asteroid Data',
          }}
          component={AsteroidData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
