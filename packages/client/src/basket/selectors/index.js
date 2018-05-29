const getBasketState = state => state.basket;

export const getProductsInBasket = state => Object.values(getBasketState(state));

export const getTotalProductsInBasket = state =>
  getProductsInBasket(state).reduce((previousQuantity, product) => previousQuantity + product.quantity, 0);
