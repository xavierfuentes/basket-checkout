import { actionTypes } from '../actions';

export const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PRODUCT_TO_BASKET_SUCCESS:
      return {
        ...state,
        [payload.product.sku]: {
          ...payload.product,
          quantity: ((state[payload.product.sku] && state[payload.product.sku].quantity) || 0) + 1
        }
      };
    case actionTypes.REMOVE_PRODUCT_FROM_BASKET_SUCCESS:
      return Object.keys(state).reduce((newState, sku) => {
        return +sku !== payload.sku ? { ...newState, [sku]: state[sku] } : newState;
      }, {});
    default:
      return state;
  }
};
