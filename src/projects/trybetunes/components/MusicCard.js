import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const { trackName, previewUrl, trackId, page, fullObj, isAFavorite } = this.props;
    const { isLoading } = this.state;

    const input = (
      <input
        type="checkbox"
        name="favoriteCheckbox"
        id="favoriteCheckbox"
        data-testid={ `checkbox-music-${trackId}` }
        onChange={ () => {
          this.setState({ isLoading: true });
          addSong(fullObj).then(() => this.setState({ isLoading: false }));
        } }
      />
    );

    if (isAFavorite) {
      return (
        <input
          type="checkbox"
          name="favoriteCheckbox"
          id="favoriteCheckbox"
          data-testid={ `checkbox-music-${trackId}` }
          checked
          onChange={ () => {
            this.setState({ isLoading: true });
            addSong(fullObj).then(() => this.setState({ isLoading: false }));
          } }
        />
      );
    }

    return (
      <div>
        <div>
          <span>{trackName}</span>
          <label htmlFor="favoriteCheckbox">
            {input}
            Favorita
          </label>
        </div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
        </audio>
        {isLoading && <Loading isLoading={ isLoading } targetRoute={ page } />}
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  fullObj: PropTypes.objectOf(PropTypes.any).isRequired,
  isAFavorite: PropTypes.bool.isRequired,
};

export default MusicCard;
