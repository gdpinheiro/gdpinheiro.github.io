import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';

function Categories() {
  const [categories, setCategories] = useState([]);

  // componentDidMount() {
  //   this.setCategories();
  // }

  const setCategoriesFunc = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  };

  const handleCategory = ({ target }) => {
    const { setCategoryState, setSearchResults } = this.props;
    const { id } = target;
    setCategoryState(id);

    getProductsFromCategoryAndQuery(id).then((data) => setSearchResults(data));
  };

  return (
    <ul className='categories-container'>
      <div>Categorias:</div>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type='button'
            id={category.id}
            onClick={this.handleCategory}
            data-testid='category'
            className='btn'
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

Categories.propTypes = {
  setCategoryState: PropTypes.func.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default Categories;
