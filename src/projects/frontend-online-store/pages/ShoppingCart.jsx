import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      isCartEmpty: true,
      cartItems: [],
    };
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.verifyCart(cart);
  }

  verifyCart = (cart) => {
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

  updateCartState = (func, item) => {
    func(item);
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    this.verifyCart(cartItems);
  }

  render() {
    const { isCartEmpty, cartItems } = this.state;
    return (
      <div>
        <div>
          {isCartEmpty ? (
            <div>
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
                {' '}
              </p>
            </div>
          ) : (
            <div>
              <ul>
                {cartItems.map((elem) => (<CartItem
                  item={ elem }
                  key={ elem.id }
                  updateCartState={ this.updateCartState }
                />))}
              </ul>
              <Link
                to={ {
                  pathname: '/Checkout',
                } }
                data-testid="checkout-products"
              >
                Finalizar Compra
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = PropTypes.arrayOf(PropTypes.object).isRequired;

export default ShoppingCart;
