import React from 'react';

function TextInput(props) {
  const { name, id, placeholder } = props;

  return (
    <div>
      <input type='text' name={name} id={id} placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
