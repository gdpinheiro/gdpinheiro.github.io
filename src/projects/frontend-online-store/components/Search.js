import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import addToCart from '../services/addToCart';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      categoryFilter: '',
      searchQuery: undefined,
    };
  }

  setSearchQuery = ({ target }) => {
    const { value } = target;
    this.setState({ searchQuery: value });
  };

  searchButton = () => {
    const { searchQuery, categoryFilter } = this.state;
    const { setSearchResults } = this.props;
    getProductsFromCategoryAndQuery(
      categoryFilter, searchQuery,
    )
      .then((data) => setSearchResults(data));
  };

  render() {
    const { searchResults } = this.props;

    const productCards = searchResults.map((elem) => (
      <div key={ elem.id } className="product-card">
        <Link
          to={ {
            pathname: `/product/${elem.id}`,
            state: {
              product: elem,
            },
          } }
          data-testid="product-detail-link"
        >
          <li key={ elem.id } data-testid="product">
            <h5 className="product-title">{elem.title}</h5>
            <img src={ elem.thumbnail } alt="" className="product-img" />
            <p className="product-price">
              R$
              {' '}
              {elem.price}
            </p>
          </li>
        </Link>
        {/* https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method  */}
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(elem) }
          className="btn"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    ));

    return (
      <div>
        <div className="search-bar-btn">
          <input
            type="text"
            onChange={ this.setSearchQuery }
            data-testid="query-input"
            className="search-input"
          />
          <button
            type="button"
            onClick={ this.searchButton }
            data-testid="query-button"
            className="btn"
          >
            Buscar
          </button>
        </div>
        <div>
          {searchResults.length === 0 ? (
            <span data-testid="product">Nenhum produto foi encontrado</span>
          ) : (
            <ul className="search-results">{productCards}</ul>
          )}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
