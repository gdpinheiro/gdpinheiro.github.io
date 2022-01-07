import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';
import addToCart from '../services/addToCart';

function ProductDetail(props) {
  const [reviews, setReviews] = useState([]);

  // componentDidMount() {
  //   const {
  //     match: {
  //       params: { id },
  //     },
  //   } = this.props;
  //   const previewReviews = JSON.parse(localStorage.getItem(id));
  //   if (!previewReviews) {
  //     return;
  //   }
  //   previewReviews.map((elem) => this.addReview(elem));
  // }

  const saveToStorage = () => {
    const { reviews } = this.state;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    localStorage.setItem(id, JSON.stringify(reviews));
  };

  const addReview = ({ rating, email, review }) => {
    if (!email || !rating) {
      return;
    }

    this.setState(
      (prev) => ({
        reviews: [
          ...prev.reviews,
          {
            email,
            rating,
            review,
          },
        ],
      }),
      this.saveToStorage
    );
  };

  const attributeFilter = (attr) => {
    if (!attr.value_name) {
      return;
    }
    return (
      <li key={attr.id}>
        {attr.name}: {attr.value_name}
      </li>
    );
  };

  const { location } = props;
  const { state } = location;
  const { product } = state;
  const { attributes } = product;

  return (
    <div>
      <Link data-testid='shopping-cart-button' to='/ShoppingCart'>
        <i className='fas fa-shopping-cart' />
      </Link>
      <div>
        <h3 data-testid='product-detail-name'>{product.title} </h3>
        <img src={product.thumbnail} alt='' />
        <p>R$ {product.price}</p>
      </div>
      <ul>{attributes.map((elem) => this.attributeFilter(elem))}</ul>
      <div>
        <button
          type='button'
          onClick={() => addToCart(product)}
          data-testid='product-detail-add-to-cart'
        >
          Adicionar ao Carrinho
        </button>
      </div>
      <ReviewForm addReview={this.addReview} />
      {reviews.map((elem) => (
        <Reviews review={elem} key={elem.email} />
      ))}
    </div>
  );
}

ProductDetail.propTypes = PropTypes.arrayOf(PropTypes.object).isRequired;

export default ProductDetail;