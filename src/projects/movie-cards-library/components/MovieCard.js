import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function MovieCard(props) {
  const {
    movie: { title, subtitle, storyline, ImagePath, rating },
  } = props;

  return (
    <div className='movie-card'>
      <ImagePath />
      <div className='movie-card-body'>
        <h4 className='movie-card-title'>{title}</h4>
        <h5 className='movie-card-subtitle'>{subtitle}</h5>
        <p className='movie-card-storyline'>{storyline}</p>
      </div>
      <Rating rating={rating} />
    </div>
  );
}

MovieCard.propTypes = PropTypes.shape({
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ImagePath: PropTypes.node.isRequired,
  }).isRequired,
}).isRequired;

export default MovieCard;
