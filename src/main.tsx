import * as React from 'react';
import {createContext, useCallback, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from './routes';
import { ItemType } from './Views/Home/SingleItem';
import { addItemLocal, removeItemLocal } from './helperFunctions';

export interface ItemsWithQuantity extends ItemType {
  quantity: number
};

export type BasketType = ItemsWithQuantity[] | [];

export type ContextValueType = {
  basket: BasketType | null;
  addItem: (response: ItemType) => void;
  removeItem: (response: ItemType) => void;
};

export const AuthContext = createContext<ContextValueType | null>(null);

export default function App() {
  const [basket, setBasket] = useState<BasketType>([]);

  const addItem = useCallback((item: ItemType) => {
    const newBasket = addItemLocal(item, basket);
    setBasket(newBasket);
  }, [basket]);


  const removeItem = useCallback((item: ItemType) => {
    const newBasket = removeItemLocal(item, basket);
    setBasket(newBasket);
  }, [basket]);

  const contextValue = useMemo(
    () => ({
      basket,
      addItem,
      removeItem,
    }),
    [basket],
  );
  return (
    <NavigationContainer>
      <AuthContext.Provider value={contextValue}>{routes}</AuthContext.Provider>
    </NavigationContainer>
  );
}