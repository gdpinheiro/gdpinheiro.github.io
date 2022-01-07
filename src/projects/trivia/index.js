import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages/Feedback';

function Trivia() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/game' element={<Game />} />
      <Route path='/feedback' element={<Feedback />} />
    </Routes>
  );
}

export default Trivia;
