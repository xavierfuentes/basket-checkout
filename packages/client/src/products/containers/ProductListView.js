import { connect } from 'react-redux';

import ProductListView from '../components/ProductListView';
import { addToBasket } from '../../basket/actions';
import { getTotalProductsInBasket } from '../../basket/selectors';

const mapStateToProps = state => ({
  products: state.products.all,
  productsInBasket: getTotalProductsInBasket(state)
});

export default connect(
  mapStateToProps,
  { addToBasket }
)(ProductListView);
