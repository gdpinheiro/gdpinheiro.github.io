import React from 'react';

function PasswordInput(props) {
  const { name, id, placeholder } = props;

  return (
    <div>
      <input type='password' name={name} id={id} placeholder={placeholder} />
    </div>
  );
}

export default PasswordInput;
