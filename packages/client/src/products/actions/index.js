export const actionTypes = {
  FETCH_ALL_PRODUCTS_REQUEST: '@BASKET_CHECKOUT/PRODUCTS/FETCH_ALL/REQUEST',
  FETCH_ALL_PRODUCTS_SUCCESS: '@BASKET_CHECKOUT/PRODUCTS/FETCH_ALL/SUCCESS',
  FETCH_ALL_PRODUCTS_FAILURE: '@BASKET_CHECKOUT/PRODUCTS/FETCH_ALL/FAILURE'
};

const fetchAllProductsRequest = () => ({ type: actionTypes.FETCH_ALL_PRODUCTS_REQUEST });
const fetchAllProductsSuccess = products => ({ type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS, payload: { products } });
const fetchAllProductsFailure = error => ({ type: actionTypes.FETCH_ALL_PRODUCTS_FAILURE, payload: { error } });

export const fetchAllProducts = () => async dispatch => {
  dispatch(fetchAllProductsRequest());

  try {
    const response = await fetch('/products');
    const data = await response.json();
    // manipulate data? maybe sort by name/price?
    dispatch(fetchAllProductsSuccess(data));
  } catch (error) {
    dispatch(fetchAllProductsFailure(error));
  }
};
