import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'TupanaTrail' }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: 'Find Gyms' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
