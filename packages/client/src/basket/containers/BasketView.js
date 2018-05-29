import { connect } from 'react-redux';

import BasketView from '../components/BasketView';
import { removeFromBasket } from '../actions';
import { getProductsInBasket, getTotalProductsInBasket } from '../selectors';

const mapStateToProps = state => ({
  productsInBasket: getProductsInBasket(state),
  totalProductsInBasket: getTotalProductsInBasket(state)
});

export default connect(
  mapStateToProps,
  { removeFromBasket }
)(BasketView);
