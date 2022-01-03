import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      username: '',
    };
  }

  async componentDidMount() {
    getUser()
      .then((data) => data.name)
      .then(((name) => this.getUserState(name)))
      .then(() => this.changeLoadingState());
  }

  getUserState = (name) => {
    this.setState({ username: name });
  }

  changeLoadingState = () => {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading, username } = this.state;
    const { page } = this.props;
    return (
      <header data-testid="header-component">
        <h1>Header</h1>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        <p data-testid="header-user-name">{username}</p>
        {isLoading && <Loading isLoading={ isLoading } targetRoute={ page } />}
      </header>
    );
  }
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
