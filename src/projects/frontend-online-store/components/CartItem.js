import React from 'react';
import PropTypes from 'prop-types';
import addToCart from '../services/addToCart';
import rmFromCart from '../services/rmFromCart';

function CartItem() {
  const { item, updateCartState } = this.props;
  return (
    <li key={item.id}>
      <p>{item.title}</p>
      <button type='button' onClick={() => updateCartState(rmFromCart, item)}>
        -
      </button>
      <p>{item.quantity}</p>
      <button type='button' onClick={() => updateCartState(addToCart, item)}>
        +
      </button>
      <img src={item.thumbnail} alt='' />
      <p>{item.price}</p>
    </li>
  );
}

CartItem.propTypes = PropTypes.objectOf(PropTypes.object).isRequired;

export default CartItem;
