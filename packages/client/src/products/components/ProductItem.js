import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product, onAddToBasketClicked }) => {
  return (
    <div>
      <span>{product.name}</span>
      <span>{product.price}</span>
      <button onClick={onAddToBasketClicked}>Add to basket</button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  onAddToBasketClicked: PropTypes.func.isRequired
};

export default ProductItem;
