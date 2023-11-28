import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Views/Home/HomeScreen';
import Checkout from './Views/Checkout/Checkout';

const Stack = createNativeStackNavigator();

export const routes = (
  <Stack.Navigator
    initialRouteName={'HomeScreen'}
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
    <Stack.Screen
      name='HomeScreen'
      component={HomeScreen}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen
      name='Checkout'
      component={Checkout}
      options={{gestureEnabled: false}}
    />
  </Stack.Navigator>
);

export type RootStackParamList = {
  HomeScreen: any;
  Checkout: any;
};
