import React from 'react';
import './style.css';
import Header from './components/Header';
import PersonalData from './components/PersonalData';
import FamilyContent from './components/FamilyContent';
import Rating from './components/Rating';
import ValidateForm from './components/ValidateForm';
import trybewartsColored from './images/trybewartsColored.svg';

function TrybeWarts() {
  function sendValues(event) {
    // event.preventDefault();
    // const trybeEmail = email.value;
    // const trybePassword = password.value;
    // if (trybeEmail !== 'tryber@teste.com' && trybePassword !== '123456') {
    //   alert('Email ou senha inválidos.');
    // } else {
    //   alert('Olá, Tryber!');
    // }
  }

  function enableSubmitBtn() {
    // if (agreementCheck.checked === true) {
    //   submitButton.removeAttribute('disabled');
    // } else {
    //   submitButton.setAttribute('disabled', '');
    // }
  }

  return (
    <div>
      <Header />
      <main className='container'>
        <form id='evaluation-form' className='form'>
          <PersonalData />
          <FamilyContent />
          <Rating />
          <ValidateForm />
        </form>
        <img
          src={trybewartsColored}
          alt='logo de trybewarts'
          id='trybewarts-forms-logo'
        />
      </main>
      <footer>Direitos reservados à Trybewarts©</footer>
    </div>
  );
}

export default TrybeWarts;
