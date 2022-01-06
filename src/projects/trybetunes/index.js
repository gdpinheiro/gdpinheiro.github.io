import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

function Trybetunes() {
  return (
    <div>
      <p>TrybeTunes</p>
      <Routes>
        <Route path='/' component={Login} />
        <Route path='/search' component={Search} />
        <Route path='/album/:id' component={Album} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/profile' component={Profile} />
        <Route path='/profile/edit' component={ProfileEdit} />
        <Route path='/*' component={NotFound} />
      </Routes>
    </div>
  );
}

export default Trybetunes;
