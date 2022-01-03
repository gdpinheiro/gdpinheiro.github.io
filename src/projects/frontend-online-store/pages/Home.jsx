import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Search from '../components/Search';
import './Home.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: '',
      searchResults: [],
    };
  }

  setSearchResults = (data) => {
    this.setState({ searchResults: data.results });
  };

  setCategoryState = (id) => {
    this.setState({ selectedCategory: id });
  };

  render() {
    const { selectedCategory, searchResults, cartItems } = this.state;
    return (
      <div className="home-container">
        <Categories
          setCategoryState={ this.setCategoryState }
          setSearchResults={ this.setSearchResults }
        />
        <div className="search-container">
          <div className="text-cart">
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
            <Link
              to={ {
                pathname: '/ShoppingCart',
                state: { cartItems },
              } }
              data-testid="shopping-cart-button"
            >
              <i className="fas fa-shopping-cart" />
            </Link>
          </div>
          <Search
            selectedCategory={ selectedCategory }
            searchResults={ searchResults }
            setSearchResults={ this.setSearchResults }
          />
        </div>
      </div>
    );
  }
}

export default Home;
