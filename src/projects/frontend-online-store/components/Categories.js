import React from 'react';
import PropTypes from 'prop-types';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.setCategories();
  }

  async setCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleCategory = ({ target }) => {
    const { setCategoryState, setSearchResults } = this.props;
    const { id } = target;
    setCategoryState(id);

    getProductsFromCategoryAndQuery(id).then((data) => setSearchResults(data));
  };

  render() {
    const { categories } = this.state;

    return (
      <ul className="categories-container">
        <div>Categorias:</div>
        {categories.map((category) => (
          <li key={ category.id }>
            <button
              type="button"
              id={ category.id }
              onClick={ this.handleCategory }
              data-testid="category"
              className="btn"
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

Categories.propTypes = {
  setCategoryState: PropTypes.func.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default Categories;
