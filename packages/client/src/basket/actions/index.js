export const actionTypes = {
  ADD_PRODUCT_TO_BASKET_SUCCESS: '@BASKET_CHECKOUT/BASKET/ADD_PRODUCT_SUCCESS',
  REMOVE_PRODUCT_FROM_BASKET_SUCCESS: '@BASKET_CHECKOUT/BASKET/REMOVE_PRODUCT_SUCCESS'
};

const addProductToBasketSuccess = product => ({
  type: actionTypes.ADD_PRODUCT_TO_BASKET_SUCCESS,
  payload: { product }
});

const removeFromBasketSuccess = sku => ({
  type: actionTypes.REMOVE_PRODUCT_FROM_BASKET_SUCCESS,
  payload: { sku }
});

export const addToBasket = product => (dispatch, getState) => {
  const productInBasket = getState().basket[product.sku];
  if (!productInBasket || productInBasket.quantity < 10) {
    dispatch(addProductToBasketSuccess(product));
  }
};

export const removeFromBasket = sku => dispatch => {
  // using the request/success/failure pattern we could ask the user for verification
  dispatch(removeFromBasketSuccess(sku));
};
