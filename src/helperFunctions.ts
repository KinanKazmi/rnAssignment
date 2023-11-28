import { ItemType } from "./Views/Home/SingleItem"
import { BasketType } from "./main"

export const itemExists = (basket: BasketType, item: ItemType) => {
  return basket.findIndex(element => element.id === item.id)
};

export const removeItemLocal = (item: ItemType, basket: BasketType) => {
  const itemIndex = itemExists(basket, item);
  let localBasket = [...basket];
  if (localBasket[itemIndex].quantity === 1) {
    localBasket.splice(itemIndex, 1);
    return [...localBasket];
  } else {
    localBasket[itemIndex].quantity = localBasket[itemIndex].quantity - 1;
    return [...localBasket];
  }
};

export const addItemLocal = (item: ItemType, basket: BasketType) => {
  const itemIndex = itemExists(basket, item);
  if (itemIndex === -1) {
    const localBasket = [...basket];
    localBasket.push(Object.assign(item, {quantity: 1}));
    return localBasket;
  } else {
    const localBasket = [...basket];
    localBasket[itemIndex].quantity = localBasket[itemIndex].quantity + 1;
    return [...localBasket];
  }
};