import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <h1>Favorites</h1>
        <Header page="/favorites" />
      </div>
    );
  }
}

export default Favorites;
