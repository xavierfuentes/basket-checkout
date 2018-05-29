import React from 'react';
import PropTypes from 'prop-types';

import ProductItem from './ProductItem';

const ProductListView = ({ addToBasket, products, productsInBasket = 0, onGoToCheckoutClicked }) => {
  const renderListElements = product => (
    <ProductItem key={product.sku} product={product} onAddToBasketClicked={() => addToBasket(product)} />
  );

  return (
    <div>
      <div>Basket: {productsInBasket}</div>
      <div>{products.map(renderListElements)}</div>
      <div>
        <button onClick={onGoToCheckoutClicked}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

ProductListView.propTypes = {
  addToBasket: PropTypes.func.isRequired,
  onGoToCheckoutClicked: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      sku: PropTypes.number.isRequired
    })
  ).isRequired,
  productsInBasket: PropTypes.number
};

export default ProductListView;
