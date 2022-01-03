import React from 'react';
import './style.css';

function index() {
  return (
    <div>
      <header className='header'>
        <img
          src='images/trybewarts-header-logo.svg'
          alt='logo trybe'
          height='100px'
          className='trybewarts-header-logo'
        />
        <h1 id='trybewarts-header-title'>Trybewarts</h1>
        <form action='' method='GET' className='trybewarts-login'>
          <input type='text' name='email' placeholder='Email' id='email' />
          <input
            type='password'
            name='password'
            placeholder='Senha'
            id='password'
          />
          <button id='login-button' type='submit'>
            Entrar
          </button>
        </form>
      </header>
      <main className='container'>
        <form id='evaluation-form' className='form'>
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
          <div>
            <label for='' id='label-family'>
              Qual sua família?
            </label>
            <label for='radio-frontend'>
              <input
                type='radio'
                name='family'
                value='Frontend'
                id='radio-frontend'
              />
              Frontend
            </label>
            <label for='radio-backend'>
              <input
                type='radio'
                name='family'
                value='Backend'
                id='radio-backend'
              />
              Backend
            </label>
            <label for='radio-fullstack'>
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
            <label for='' id='label-content'>
              Qual conteúdo você está com mais vontade de aprender?
            </label>
            <label for='HoFs'>
              <input type='checkbox' value='HoFs' id='HoFs' />
              HoFs
            </label>
            <label for='Jest'>
              <input type='checkbox' value='Jest' id='Jest' />
              Jest
            </label>
            <label for='Promises'>
              <input type='checkbox' value='Promises' id='Promises' />
              Promises
            </label>
            <label for='React'>
              <input type='checkbox' value='React' id='React' />
              React
            </label>
            <label for='SQL'>
              <input type='checkbox' value='SQL' id='SQL' />
              SQL
            </label>
            <label for='Python'>
              <input type='checkbox' value='Python' id='Python' />
              Python
            </label>
          </div>
          <div className='avalia'>
            <label for='' id='label-rate'>
              Como você avalia a Trybewarts?
            </label>
            <label for='rate-1'>
              <input type='radio' name='rate' id='rate-1' value='1' />1
            </label>
            <label for='rate-2'>
              <input type='radio' name='rate' id='rate-2' value='2' />2
            </label>
            <label for='rate-3'>
              <input type='radio' name='rate' id='rate-3' value='3' />3
            </label>
            <label for='rate-4'>
              <input type='radio' name='rate' id='rate-4' value='4' />4
            </label>
            <label for='rate-5'>
              <input type='radio' name='rate' id='rate-5' value='5' />5
            </label>
            <label for='rate-6'>
              <input type='radio' name='rate' id='rate-6' value='6' />6
            </label>
            <label for='rate-7'>
              <input type='radio' name='rate' id='rate-7' value='7' />7
            </label>
            <label for='rate-8'>
              <input type='radio' name='rate' id='rate-8' value='8' />8
            </label>
            <label for='rate-9'>
              <input type='radio' name='rate' id='rate-9' value='9' />9
            </label>
            <label for='rate-10'>
              <input type='radio' name='rate' id='rate-10' value='10' />
              10
            </label>
          </div>
          <label for='textarea' className='textarea'>
            Deixe seu comentário:
          </label>
          <textarea
            name=''
            id='textarea'
            cols='30'
            rows='10'
            maxlength='500'
          ></textarea>
          <label for='agreement' id='label-infos'>
            Você concorda com o uso das informações acima?
            <input type='checkbox' name='' id='agreement' />
          </label>
          <button type='submit' id='submit-btn' disabled='disabled'>
            Enviar
          </button>
        </form>
        <img
          src='images/trybewarts-colored.svg'
          alt='logo de trybewars'
          id='trybewarts-forms-logo'
        />
      </main>
      <footer>Direitos reservados à Trybewarts©</footer>
    </div>
  );
}

export default index;
