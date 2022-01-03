import React, { Component } from 'react';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

class Loading extends Component {
  constructor(props) {
    super(props);
    const { isLoading } = this.props;
    this.state = {
      isLoading,
    };
  }

  componentDidMount = () => this.timeout();

  clearTimer = () => clearTimeout(this.timeout);

  timer = () => this.setState({ isLoading: false }, () => this.clearTimer());

  timeout = () => {
    const TIMEOUT = 0;
    setTimeout(this.timer, TIMEOUT);
  };

  // Fonte do Timer: https://stackoverflow.com/questions/52349145/react-loading-screen-on-all-routes

  render() {
    const { targetRoute } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <h1>Carregando...</h1>
        {isLoading === false && <Navigate to={targetRoute} />}
      </div>
    );
  }
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  targetRoute: PropTypes.string.isRequired,
};

export default Loading;
