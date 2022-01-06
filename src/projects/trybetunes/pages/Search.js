import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

function Search() {
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [input, setinput] = useState('');
  const [query, setquery] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [hasSearched, sethasSearched] = useState(false);
  const [searchResults, setsearchResults] = useState([]);

  const searchInput = ({ target }) => {
    const { value } = target;
    this.setState({ input: value, query: value }, this.btnDisabled);
  };

  const btnDisabledFunc = () => {
    const { input } = this.state;
    const minLength = 2;
    if (input.length >= minLength) {
      return this.setState({ btnDisabled: false });
    }
    return this.setState({ btnDisabled: true });
  };

  const btnSend = () => {
    const { query } = this.state;
    this.setState({ input: '', isLoading: true });
    searchAlbumsAPI(query)
      .then((data) => this.setState({ searchResults: data }))
      .then(() => this.setState({ isLoading: false, hasSearched: true }));
  };

  const inputAndButton = (
    <div>
      <input
        type='text'
        data-testid='search-artist-input'
        onChange={this.searchInput}
        value={input}
      />
      <button
        type='button'
        data-testid='search-artist-button'
        onClick={this.btnSend}
        disabled={btnDisabled}
      >
        Pesquisar
      </button>
    </div>
  );

  let resultList = (
    <div>
      <h3>Resultado de álbuns de: {query}</h3>
      <ul>
        {searchResults.map((elem) => (
          <Link
            to={`/album/${elem.collectionId}`}
            data-testid={`link-to-album-${elem.collectionId}`}
            key={elem.collectionId}
          >
            <li>
              <img src={elem.artworkUrl100} alt='' />
              <h3>{elem.artistName}</h3>
              <p>{elem.collectionName} </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );

  if (searchResults.length === 0) {
    resultList = <div>Nenhum álbum foi encontrado</div>;
  }

  return (
    <div data-testid='page-search'>
      <Header page='/search' />
      {isLoading && <Loading isLoading={isLoading} targetRoute='/search' />}
      <h1>Search</h1>
      {inputAndButton}
      {hasSearched && resultList}
    </div>
  );
}

export default Search;
