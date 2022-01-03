import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      searchResults: [],
      artistName: '',
      collectionName: '',
      favoriteSongs: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    getMusics(match.params.id).then((data) => this.setState({
      searchResults: data,
      artistName: data[0].artistName,
      collectionName: data[0].collectionName,
    }));
    getFavoriteSongs()
      .then((data) => this.setState({ favoriteSongs: data }))
      .then(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { location } = this.props;
    const {
      isLoading,
      searchResults,
      artistName,
      collectionName,
      favoriteSongs,
    } = this.state;

    const musics = searchResults.map((elem) => {
      if (!elem.trackId) {
        return;
      }

      const findFavorite = favoriteSongs.find(
        (fsElem) => fsElem.trackId === elem.trackId,
      );

      let isAFavorite = false;
      if (findFavorite) {
        isAFavorite = true;
      }

      return (
        <MusicCard
          key={ elem.trackId }
          trackName={ elem.trackName }
          previewUrl={ elem.previewUrl }
          trackId={ elem.trackId }
          page={ location.pathname }
          fullObj={ elem }
          isAFavorite={ isAFavorite }
        />
      );
    });

    const artistNameText = <h1 data-testid="artist-name">{artistName}</h1>;

    const collectionNameText = (
      <h3 data-testid="album-name">{collectionName}</h3>
    );

    return (
      <div data-testid="page-album">
        <Header page={ location.pathname } />
        {artistNameText}
        {collectionNameText}
        {isLoading && (
          <Loading isLoading={ isLoading } targetRoute={ location.pathname } />
        )}
        <div>{musics}</div>
      </div>
    );
  }
}

Album.propTypes = PropTypes.objectOf(PropTypes.object).isRequired;

export default Album;
