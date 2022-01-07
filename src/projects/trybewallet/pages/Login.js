import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const handleChange = ({ target }) => {
    // setState({
    //   [target.name]: target.value,
    // });
    // verifyEmail();
    // verifyPassword();
  };

  const verifyEmail = () => {
    // const regex = /\w*@\w*\.\w/;
    // return setState({ emailIsValid: regex.test(email) });
  };

  const verifyPassword = () => {
    // const MAX_PASSWORD_LENGTH = 4;
    // return setState({
    //   passwordIsValid: password.length > MAX_PASSWORD_LENGTH,
    // });
  };

  const login = () => {
    const { history, saveUserEmail } = props;
    history.push('/carteira');
    saveUserEmail(email);
  };

  const loginButton =
    emailIsValid && passwordIsValid ? (
      <button type='button' onClick={login}>
        Entrar
      </button>
    ) : (
      <button type='button' disabled>
        Entrar
      </button>
    );
  return (
    <div>
      <input type='text' name='email' onChange={handleChange} />
      <input type='text' name='password' onChange={handleChange} />
      {loginButton}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveUserEmail: (email) => dispatch(saveEmail(email)),
});

export default Login;

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  saveUserEmail: PropTypes.func.isRequired,
};
