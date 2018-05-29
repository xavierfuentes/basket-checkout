import React from 'react';
import PropTypes from 'prop-types';

import BasketItem from './BasketItem';

const BasketView = ({ onContinueShoppingClicked, productsInBasket, removeFromBasket, totalProductsInBasket = 0 }) => {
  const renderListElements = product => (
    <BasketItem key={product.sku} product={product} onRemoveFromBasketClicked={() => removeFromBasket(product.sku)} />
  );

  return (
    <div>
      <section>
        <button onClick={onContinueShoppingClicked}>Continue shopping</button>
        <span>Basket: {totalProductsInBasket}</span>
      </section>

      <section>{productsInBasket.map(renderListElements)}</section>

      <section>
        Enter promo code: <input type="text" /> <button>Apply</button>
      </section>

      <section>
        <div>Subtotal: </div>
        <div>Promotional discount amount: </div>
        <div>Basket Total: </div>
        <div>
          Please enter your credit card number <input type="text" />
        </div>
        <button>Checkout</button>
      </section>
    </div>
  );
};

BasketView.propTypes = {
  onContinueShoppingClicked: PropTypes.func.isRequired,
  productsInBasket: PropTypes.arrayOf(PropTypes.shape({})),
  removeFromBasket: PropTypes.func.isRequired,
  totalProductsInBasket: PropTypes.number
};

export default BasketView;
