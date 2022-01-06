import React from 'react';
import Header from '../components/Header';

function ProfileEdit() {
  return (
    <div data-testid='page-profile-edit'>
      <h1>ProfileEdit</h1>
      <Header page='/profile/edit' />
    </div>
  );
}

export default ProfileEdit;
