import React from 'react';

class Checkout extends React.Component {
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
  render() {
    return (
      <div>
        <form>

          <label htmlFor="inputName">
            {' '}
            Nome Completo:
            <input data-testid="checkout-fullname" id="inputName" type="text" />
          </label>

          <label htmlFor="inputEmail">
            {' '}
            Email:
            <input data-testid="checkout-email" id="inputEmail" type="text" />
          </label>

          <label htmlFor="inputCPF">
            {' '}
            CPF:
            <input data-testid="checkout-cpf" id="inputCPF" type="text" />
          </label>

          <label htmlFor="inputPhone">
            {' '}
            Telefone:
            <input data-testid="checkout-phone" id="inputPhone" type="text" />
          </label>

          <label htmlFor="inputCEP">
            {' '}
            CEP:
            <input data-testid="checkout-cep" id="inputCEP" type="text" />
          </label>

          <label htmlFor="inputAddress">
            {' '}
            Endereço:
            <input data-testid="checkout-address" id="inputAddress" type="text" />
          </label>

          <button type="button">Comprar</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
