import React from 'react';

function Checkout() {
  // constructor() {
  //   super();
  //   this.state = {
  //     Products: [],
  //   };
  // }

  // componentDidMount() {
  //   this.updateProducts();
  // }

  // updateProducts() {
  //   const cart = JSON.parse(localStorage.getItem('cart'));
  //   this.setState({
  //     Products: cart,
  //   });
  // }

  return (
    <div>
      <form>
        <label htmlFor='inputName'>
          {' '}
          Nome Completo:
          <input id='inputName' type='text' />
        </label>

        <label htmlFor='inputEmail'>
          {' '}
          Email:
          <input id='inputEmail' type='text' />
        </label>

        <label htmlFor='inputCPF'>
          {' '}
          CPF:
          <input id='inputCPF' type='text' />
        </label>

        <label htmlFor='inputPhone'>
          {' '}
          Telefone:
          <input id='inputPhone' type='text' />
        </label>

        <label htmlFor='inputCEP'>
          {' '}
          CEP:
          <input id='inputCEP' type='text' />
        </label>

        <label htmlFor='inputAddress'>
          {' '}
          Endereço:
          <input id='inputAddress' type='text' />
        </label>

        <button type='button'>Comprar</button>
      </form>
    </div>
  );
}

export default Checkout;
