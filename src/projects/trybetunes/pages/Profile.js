import React from 'react';
import Header from '../components/Header';

function Profile() {
  return (
    <div data-testid='page-profile'>
      <h1>Profile</h1>
      <Header page='/profile' />
    </div>
  );
}

export default Profile;
