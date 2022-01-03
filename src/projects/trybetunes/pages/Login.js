import React, { Component } from 'react';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      btnDisabled: true,
      name: '',
      isLoading: false,
    };
  }

  loginInput = ({ target }) => {
    const { value } = target;
    this.setState({ name: value }, this.btnDisabled);
  };

  btnDisabled = () => {
    const { name } = this.state;
    const minLength = 3;
    if (name.length >= minLength) {
      return this.setState({ btnDisabled: false });
    }
    return this.setState({ btnDisabled: true });
  };

  btnSend = () => {
    const { name } = this.state;
    this.setState({ isLoading: true }, () => createUser({ name }));
  };

  render() {
    const { isLoading, btnDisabled } = this.state;
    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        <input
          type="text"
          data-testid="login-name-input"
          onChange={ this.loginInput }
        />
        <button
          type="button"
          data-testid="login-submit-button"
          onClick={ this.btnSend }
          disabled={ btnDisabled }
        >
          Entrar
        </button>
        {isLoading && <Loading isLoading={ isLoading } targetRoute="/search" />}
      </div>
    );
  }
}

export default Login;
