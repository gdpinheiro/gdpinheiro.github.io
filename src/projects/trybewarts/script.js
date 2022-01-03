const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const agreementCheck = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

// Req 3
function sendValues(event) {
  event.preventDefault();
  const trybeEmail = email.value;
  const trybePassword = password.value;
  if (trybeEmail !== 'tryber@teste.com' && trybePassword !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', sendValues);

// Req 18
function enableSubmitBtn() {
  if (agreementCheck.checked === true) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', '');
  }
}

agreementCheck.addEventListener('change', enableSubmitBtn);
