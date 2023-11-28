import React from 'react';
import Checkout from '../src/Views/Checkout/Checkout';
import {render, fireEvent} from '@testing-library/react-native';

it('should navigate to checkout screen', () => {
  const navigation = {navigate: () => {}}
  jest.spyOn(navigation, 'navigate');
  const {getByText} = render(<Checkout navigation={navigation}/>);
  const gotoCheckout = getByText('Back to Home');
  fireEvent.press(gotoCheckout);
  expect(navigation.navigate).toHaveBeenCalledWith('HomeScreen');
});
