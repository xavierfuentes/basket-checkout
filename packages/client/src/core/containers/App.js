import { connect } from 'react-redux';

import App from '../components/App';
import { fetchAllProducts } from '../../products/actions';

const mapStateToProps = state => ({
  products: state.products.all
});

export default connect(
  mapStateToProps,
  { fetchAllProducts }
)(App);
