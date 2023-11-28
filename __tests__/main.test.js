import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../src/main';
import { addItemLocal, removeItemLocal } from '../src/helperFunctions';

const mockItem = {
  id: 1,
  colour: 'red',
  name: 'test Item',
  price: 123,
  img: 'string',
  quantity: 0
};

describe('App component', () => {
  it('should render an empty basket initially', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('name:')).toBeNull();
    expect(queryByText('quantity:')).toBeNull();
    expect(queryByText('id:')).toBeNull();
  });

  it('should add an item to the basket when "add one" button is pressed', () => {
    let basket = [];
    basket = addItemLocal(mockItem, basket);
    expect(basket).toHaveLength(1);
    expect(basket[0]).toEqual({ ...mockItem, quantity: 1 });
  });

  it('should increment the quantity when "add one" button is pressed multiple times', () => {
    let basket = [];
    basket = addItemLocal(mockItem, basket);
    basket = addItemLocal(mockItem, basket);
    expect(basket).toHaveLength(1);
    expect(basket[0]).toEqual({ ...mockItem, quantity: 2 });
  });

  it('should decrement the quantity when "remove one" button is pressed and quantity is over 1', () => {
    let basket = [];
    basket = addItemLocal(mockItem, basket);
    basket = addItemLocal(mockItem, basket);
    basket = removeItemLocal(mockItem, basket);
    expect(basket).toHaveLength(1);
    expect(basket[0]).toEqual({ ...mockItem, quantity: 1 });
  });

  it('should remove the item when "remove one" button is pressed and quantity is 1', () => {
    let basket = [];
    basket = addItemLocal(mockItem, basket);
    basket = removeItemLocal(mockItem, basket);
    expect(basket).toHaveLength(0);
  });
});