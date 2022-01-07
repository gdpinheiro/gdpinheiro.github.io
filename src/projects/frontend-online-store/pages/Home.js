import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Search from '../components/Search';
import './Home.css';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const setSearchResultsFunc = (data) => {
    setSearchResults(data.results);
  };

  const setCategoryState = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className='home-container'>
      <Categories
        setCategoryState={setCategoryState}
        setSearchResults={setSearchResultsFunc}
      />
      <div className='search-container'>
        <div className='text-cart'>
          <h3>Digite algum termo de pesquisa ou escolha uma categoria.</h3>
          <Link
            to={{
              pathname: '/ShoppingCart',
              state: { cartItems },
            }}
          >
            <i className='fas fa-shopping-cart' />
          </Link>
        </div>
        <Search
          selectedCategory={selectedCategory}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      </div>
    </div>
  );
}

export default Home;
