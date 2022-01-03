import React, { Component } from 'react';
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';

class Reviews extends Component {
  render() {
    const { review: fullReview } = this.props;
    const { email, rating, review } = fullReview;
    return (
      <div>
        <h5>{email}</h5>
        <Rating ratingValue={rating} size='20' readonly />
        <p>{review}</p>
      </div>
    );
  }
}

Reviews.propTypes = PropTypes.arrayOf(PropTypes.object).isRequired;

export default Reviews;
