import React from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

function Login() {
  return (
    <form className='trybewarts-login'>
      <TextInput name='email' placeholder='Email' id='email' />
      <PasswordInput name='password' placeholder='Senha' id='password' />
      <button id='login-button' type='submit'>
        Entrar
      </button>
    </form>
  );
}

export default Login;
