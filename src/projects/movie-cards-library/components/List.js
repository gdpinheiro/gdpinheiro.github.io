import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import data from '../data';

function List() {
  return (
    <div className='movie-list'>
      {data.map((elem) => (
        <MovieCard key={elem.title} movie={elem} />
      ))}
    </div>
  );
}

List.propTypes = PropTypes.shape({
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}).isRequired;

export default List;
