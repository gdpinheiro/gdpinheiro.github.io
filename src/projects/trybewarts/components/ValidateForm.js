import React from 'react';

function ValidateForm() {
  return (
    <div id='validate-form'>
      <label htmlFor='agreement' id='label-infos'>
        Você concorda com o uso das informações acima?
        <input type='checkbox' name='' id='agreement' />
      </label>
      <button type='submit' id='submit-btn' disabled='disabled'>
        Enviar
      </button>
    </div>
  );
}

export default ValidateForm;
