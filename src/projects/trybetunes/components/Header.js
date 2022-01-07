import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

function Header(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');

  const { page } = props;

  // async componentDidMount() {
  //   getUser()
  //     .then((data) => data.name)
  //     .then(((name) => this.getUserState(name)))
  //     .then(() => this.changeLoadingState());
  // }

  const getUserState = (name) => {
    setUsername(name);
  };

  const changeLoadingState = () => {
    setIsLoading(false);
  };

  return (
    <header>
      <h1>Header</h1>
      <Link to='/search'>Search</Link>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/profile'>Profile</Link>
      <p>{username}</p>
      {isLoading && <Loading isLoading={isLoading} targetRoute={page} />}
    </header>
  );
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
