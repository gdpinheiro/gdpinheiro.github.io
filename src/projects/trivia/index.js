import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';

function index() {
  return (
    <Routes>
      <Route path='/' component={Login} />
      <Route path='/settings' component={Settings} />
      <Route path='/game' component={Game} />
      <Route path='/feedback' component={Feedback} />
    </Routes>
  );
}

export default index;
