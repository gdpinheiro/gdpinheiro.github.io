import React from 'react';

function PersonalData() {
  return (
    <div>
      <div id='form-line1'>
        <input type='text' id='input-name' placeholder='Nome' />
        <input type='text' id='input-lastname' placeholder='Sobrenome' />
      </div>
      <div id='form-line2'>
        <input type='text' id='input-email' placeholder='Email' />
        <select name='house-selector' id='house'>
          <option value='Gitnória' id='gitnoria-house'>
            Gitnória
          </option>
          <option value='Reactpuff' id='reactpuff-house'>
            Reactpuff
          </option>
          <option value='Corvinode' id='corvinode-house'>
            Corvinode
          </option>
          <option value='Pytherina' id='pytherina-house'>
            Pytherina
          </option>
        </select>
      </div>
    </div>
  );
}

export default PersonalData;
