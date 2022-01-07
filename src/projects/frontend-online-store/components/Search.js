import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import addToCart from '../services/addToCart';

function Search(props) {
  //   categoryFilter: '',
  // searchQuery: undefined,

  const setSearchQuery = ({ target }) => {
    // const { value } = target;
    // setState({ searchQuery: value });
  };

  const searchButton = () => {
    // const { searchQuery, categoryFilter } = state;
    // const { setSearchResults } = props;
    // getProductsFromCategoryAndQuery(categoryFilter, searchQuery).then((data) =>
    //   setSearchResults(data)
    // );
  };

  const { searchResults } = props;

  const productCards = searchResults.map((elem) => (
    <div key={elem.id} className='product-card'>
      <Link
        to={{
          pathname: `/product/${elem.id}`,
          state: {
            product: elem,
          },
        }}
      >
        <li key={elem.id}>
          <h5 className='product-title'>{elem.title}</h5>
          <img src={elem.thumbnail} alt='' className='product-img' />
          <p className='product-price'>R$ {elem.price}</p>
        </li>
      </Link>
      {/* https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method  */}
      <button type='button' onClick={() => addToCart(elem)} className='btn'>
        Adicionar ao Carrinho
      </button>
    </div>
  ));

  return (
    <div>
      <div className='search-bar-btn'>
        <input type='text' onChange={setSearchQuery} className='search-input' />
        <button type='button' onClick={searchButton} className='btn'>
          Buscar
        </button>
      </div>
      <div>
        {searchResults.length === 0 ? (
          <span>Nenhum produto foi encontrado</span>
        ) : (
          <ul className='search-results'>{productCards}</ul>
        )}
      </div>
    </div>
  );
}

Search.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
