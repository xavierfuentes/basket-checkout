import { combineReducers } from 'redux';

import products from '../../products/reducers';
import basket from '../../basket/reducers';

export default combineReducers({
  basket,
  products
});
