import React from 'react';
import SingleItem from '../src/Views/Home/SingleItem';
import {render} from '@testing-library/react-native';

it('should add to basket', () => {
  const {getByText} = render(<SingleItem />);
  // const addToBasket = getByText('Add to basket');
  // fireEvent.press(addToBasket);
});