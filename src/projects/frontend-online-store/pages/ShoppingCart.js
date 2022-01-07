import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

function ShoppingCart() {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  // componentDidMount() {
  //   const cart = JSON.parse(localStorage.getItem('cart'));
  //   this.verifyCart(cart);
  // }

  const verifyCart = (cart) => {
    this.setState({
      cartItems: cart,
    });
    if (cart) {
      this.setState({ isCartEmpty: false });
      if (cart.length === 0) {
        this.setState({ isCartEmpty: true });
      }
    }
  };

  const updateCartState = (func, item) => {
    func(item);
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    this.verifyCart(cartItems);
  };

  return (
    <div>
      <div>
        {isCartEmpty ? (
          <div>
            <p>Seu carrinho está vazio </p>
          </div>
        ) : (
          <div>
            <ul>
              {cartItems.map((elem) => (
                <CartItem
                  item={elem}
                  key={elem.id}
                  updateCartState={this.updateCartState}
                />
              ))}
            </ul>
            <Link
              to={{
                pathname: '/Checkout',
              }}
            >
              Finalizar Compra
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

ShoppingCart.propTypes = PropTypes.arrayOf(PropTypes.object).isRequired;

export default ShoppingCart;
