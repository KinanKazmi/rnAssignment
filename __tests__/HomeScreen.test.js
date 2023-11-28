import React from 'react';
import Homescreen from '../src/Views/Home/HomeScreen';
import {render, fireEvent} from '@testing-library/react-native';

it('should navigate to checkout screen', () => {
  const navigation = {navigate: () => {}}
  jest.spyOn(navigation, 'navigate');
  const {getByText} = render(<Homescreen navigation={navigation}/>);
  const gotoCheckout = getByText('Proceed to Checkout');
  fireEvent.press(gotoCheckout);
  expect(navigation.navigate).toHaveBeenCalledWith('Checkout');
});