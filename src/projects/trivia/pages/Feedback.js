import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  checkAssertions() {
    const getAssertions = JSON.parse(localStorage.getItem('state')).player
      .assertions;
    const minAssertions = 3;
    const result = getAssertions < minAssertions ? (
      <h1 data-testid="feedback-text">Podia ser melhor...</h1>
    ) : (
      <h1 data-testid="feedback-text">Mandou bem!</h1>
    );
    return result;
  }

  finalScore() {
    const { assertions, score } = JSON.parse(
      localStorage.getItem('state'),
    ).player;
    return (
      <div>
        <h1 data-testid="feedback-total-score">
          {score}
        </h1>
        <h1 data-testid="feedback-total-question">
          {assertions}
        </h1>
      </div>
    );
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
        {this.checkAssertions()}
        {this.finalScore()}
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => history.push('/') }
        >
          Jogar novamente
        </button>
      </div>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
