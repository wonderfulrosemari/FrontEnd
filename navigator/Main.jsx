/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/main/HomeScreen';

const Main = createStackNavigator();

export default () => (
  <Main.Navigator screenOptions={{ headerShown: false }}>
    <Main.Screen name="HomeScreen" component={HomeScreen} />
  </Main.Navigator>
);
