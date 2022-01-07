import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../trivia.png';
import { getLogin } from '../actions';
import requestQuestionToken from '../services/requestQuestionToken';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      button: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.playButton = this.playButton.bind(this);
  }

  validateInputs() {
    const { name, email } = this.state;
    return name && email
      ? this.setState({
          button: false,
        })
      : this.setState({
          button: true,
        });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      this.validateInputs()
    );
  }

  playButton() {
    const { passaLogin, history } = this.props;
    const { name, email } = this.state;

    requestQuestionToken();

    passaLogin(name, email);

    history.push('./game');
  }

  render() {
    const { button } = this.state;

    const buttonElement = button ? (
      <button type='button' disabled onClick={this.playButton}>
        Jogar
      </button>
    ) : (
      <button type='button' onClick={this.playButton}>
        Jogar
      </button>
    );

    return (
      <div>
        <img src={logo} className='App-logo' alt='logo' />
        <input type='text' name='name' onChange={this.handleChange} />
        <input type='text' name='email' onChange={this.handleChange} />
        {buttonElement}
        <Link to='/settings'>
          <button type='button'>Configurações do Jogo</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  passaLogin: (name, email) => dispatch(getLogin(name, email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  passaLogin: PropTypes.func.isRequired,
};
