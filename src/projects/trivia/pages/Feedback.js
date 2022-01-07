import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  checkAssertions() {
    const getAssertions = JSON.parse(localStorage.getItem('state')).player
      .assertions;
    const minAssertions = 3;
    const result =
      getAssertions < minAssertions ? (
        <h1>Podia ser melhor...</h1>
      ) : (
        <h1>Mandou bem!</h1>
      );
    return result;
  }

  finalScore() {
    const { assertions, score } = JSON.parse(
      localStorage.getItem('state')
    ).player;
    return (
      <div>
        <h1>{score}</h1>
        <h1>{assertions}</h1>
      </div>
    );
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header />
        <h1>Feedback</h1>
        {this.checkAssertions()}
        {this.finalScore()}
        <button type='button' onClick={() => history.push('/')}>
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
