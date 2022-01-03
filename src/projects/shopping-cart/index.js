import React from 'react';
import './style.css';

function index() {
  return (
    <div>
      <div class='loading'>loading...</div>
      {/* Código de loading adaptado de https://loading.io/css/  */}
      <section class='container'>
        <section class='items'></section>
        <section class='cart'>
          <span class='cart__title'>Carrinho de compras</span>
          <button class='empty-cart'>Esvaziar carrinho</button>
          <ol class='cart__items'></ol>
          <span>
            Total: R$
            <span class='total-price'>0</span>
          </span>
        </section>
      </section>
    </div>
  );
}

export default index;
