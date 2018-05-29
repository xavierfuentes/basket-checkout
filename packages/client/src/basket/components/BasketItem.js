import React from 'react';
import PropTypes from 'prop-types';

const BasketItem = ({ product, onRemoveFromBasketClicked }) => {
  return (
    <div>
      <span>{product.name}</span>
      <span>Quantity: {product.quantity}</span>
      <span>Line price: {product.quantity * product.price}</span>
      <button onClick={onRemoveFromBasketClicked}>Remove</button>
    </div>
  );
};

BasketItem.propTypes = {
  product: PropTypes.shape({
    // name: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired
  }),
  onRemoveFromBasketClicked: PropTypes.func.isRequired
};

export default BasketItem;
