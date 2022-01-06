import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function index() {
  return (
    <Routes>
      <Route path='/carteira' component={Wallet} />
      <Route path='/' component={Login} />
    </Routes>
  );
}

export default index;
