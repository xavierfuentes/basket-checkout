import React from 'react';
import PropTypes from 'prop-types';

import ProductListView from '../../products/containers/ProductListView';
import BasketView from '../../basket/containers/BasketView';
export default class App extends React.PureComponent {
  static propTypes = {
    fetchAllProducts: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        sku: PropTypes.number.isRequired
      })
    )
  };

  state = {
    inCheckout: false
  };

  toggleCheckoutView = () => {
    this.setState(prevState => ({ inCheckout: !prevState.inCheckout }));
  };

  componentDidMount() {
    const { fetchAllProducts } = this.props;
    fetchAllProducts();
  }

  render() {
    const { products = [] } = this.props;
    const { inCheckout } = this.state;

    return products.length > 0 ? (
      <div>
        {inCheckout ? (
          <BasketView onContinueShoppingClicked={this.toggleCheckoutView} />
        ) : (
          <ProductListView onGoToCheckoutClicked={this.toggleCheckoutView} />
        )}
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}
