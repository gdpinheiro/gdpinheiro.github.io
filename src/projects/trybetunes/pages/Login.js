import React, { useState } from 'react';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

function Login() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loginInput = ({ target: { value } }) => {
    setName(value);
  };

  const btnDisabledFunc = () => {
    const minLength = 3;
    if (name.length >= minLength) {
      return setBtnDisabled(false);
    }
    return setBtnDisabled(true);
  };

  const btnSend = () => {
    setIsLoading(true);
    createUser(name);
  };

  return (
    <div>
      <h1>Login</h1>
      <input type='text' onChange={loginInput} />
      <button type='button' onClick={btnSend} disabled={btnDisabled}>
        Entrar
      </button>
      {isLoading && <Loading isLoading={isLoading} targetRoute='/search' />}
    </div>
  );
}

export default Login;
