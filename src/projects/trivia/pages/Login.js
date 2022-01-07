import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../trivia.png';
import { getLogin } from '../actions';
import requestQuestionToken from '../services/requestQuestionToken';

function Login() {
  //   name: '',
  // email: '',
  // button: true,

  const validateInputs = () => {
    const { name, email } = this.state;
    return name && email
      ? this.setState({
          button: false,
        })
      : this.setState({
          button: true,
        });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      this.validateInputs()
    );
  };

  const playButton = () => {
    const { passaLogin, history } = this.props;
    const { name, email } = this.state;

    requestQuestionToken();

    passaLogin(name, email);

    history.push('./game');
  };
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

const mapDispatchToProps = (dispatch) => ({
  passaLogin: (name, email) => dispatch(getLogin(name, email)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  passaLogin: PropTypes.func.isRequired,
};

export default Login;
