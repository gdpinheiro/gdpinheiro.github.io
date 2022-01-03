import React, { Component } from 'react';
import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      email: '',
      review: '',
    };
  }

  setReviewState = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  ratingTest = (value) => {
    this.setState({ rating: value });
  };

  render() {
    const { rating } = this.state;
    const { addReview } = this.props;
    return (
      <div>
        <h3>Avaliações</h3>
        <form>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email (Obrigatório)"
              onChange={ this.setReviewState }
            />
            <Rating onClick={ this.ratingTest } ratingValue={ rating } size="20" />
            {/* Rating utiliza a biblioteca React Simple Rating
              https://www.npmjs.com/package/react-simple-star-rating
            */}
          </div>
          <div>
            <textarea
              name="review"
              placeholder="Mensagem"
              cols="30"
              rows="5"
              onChange={ this.setReviewState }
              data-testid="product-detail-evaluation"
            />
          </div>
          <div>
            <button type="button" onClick={ () => addReview(this.state) }>
              Avaliar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired,
};

export default ReviewForm;
