/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '../screens/main/Home';
import BackBtn from '../components/BackBtn';
import Search from '../screens/main/Search';

const MainNavigator = createStackNavigator();

export default function Main() {
  return (
    <MainNavigator.Navigator initialRouteName="Home">
      <MainNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainNavigator.Screen
        name="Search"
        component={Search}
        screenOptions={() => ({
          headerBackTitleVisible: false,
          headerBackImage: () => <BackBtn />,
          gestureEnabled: true,
          ...TransitionPresets.ModalTransition,
        })}
      />
    </MainNavigator.Navigator>
  );
}
