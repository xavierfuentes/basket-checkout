import { actionTypes } from '../actions';

export const DEFAULT_STATE = {
  all: []
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
      return { ...state, all: payload.products };
    default:
      return state;
  }
};
