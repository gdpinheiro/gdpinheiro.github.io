import React from 'react';

function FamilyContent() {
  return (
    <div>
      <div>
        <label htmlFor='' id='label-family'>
          Qual sua família?
        </label>
        <label htmlFor='radio-frontend'>
          <input
            type='radio'
            name='family'
            value='Frontend'
            id='radio-frontend'
          />
          Frontend
        </label>
        <label htmlFor='radio-backend'>
          <input
            type='radio'
            name='family'
            value='Backend'
            id='radio-backend'
          />
          Backend
        </label>
        <label htmlFor='radio-fullstack'>
          <input
            type='radio'
            name='family'
            value='FullStack'
            id='radio-fullstack'
          />
          FullStack
        </label>
      </div>
      <div>
        <label htmlFor='' id='label-content'>
          Qual conteúdo você está com mais vontade de aprender?
        </label>
        <label htmlFor='HoFs'>
          <input type='checkbox' value='HoFs' id='HoFs' />
          HoFs
        </label>
        <label htmlFor='Jest'>
          <input type='checkbox' value='Jest' id='Jest' />
          Jest
        </label>
        <label htmlFor='Promises'>
          <input type='checkbox' value='Promises' id='Promises' />
          Promises
        </label>
        <label htmlFor='React'>
          <input type='checkbox' value='React' id='React' />
          React
        </label>
        <label htmlFor='SQL'>
          <input type='checkbox' value='SQL' id='SQL' />
          SQL
        </label>
        <label htmlFor='Python'>
          <input type='checkbox' value='Python' id='Python' />
          Python
        </label>
      </div>
    </div>
  );
}

export default FamilyContent;
