import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';

function ReviewForm(props) {
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const { addReview } = props;

  const setReviewState = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  const ratingTest = (value) => {
    this.setState({ rating: value });
  };

  return (
    <div>
      <h3>Avaliações</h3>
      <form>
        <div>
          <input
            type='text'
            name='email'
            placeholder='Email (Obrigatório)'
            onChange={this.setReviewState}
          />
          <Rating onClick={this.ratingTest} ratingValue={rating} size='20' />
          {/* Rating utiliza a biblioteca React Simple Rating
              https://www.npmjs.com/package/react-simple-star-rating
            */}
        </div>
        <div>
          <textarea
            name='review'
            placeholder='Mensagem'
            cols='30'
            rows='5'
            onChange={this.setReviewState}
            data-testid='product-detail-evaluation'
          />
        </div>
        <div>
          <button type='button' onClick={() => addReview(this.state)}>
            Avaliar
          </button>
        </div>
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired,
};

export default ReviewForm;
