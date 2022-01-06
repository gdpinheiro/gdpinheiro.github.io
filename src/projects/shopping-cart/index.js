import React from 'react';
import './style.css';

function ShoppingCart() {
  const apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=$computador';

  const dataResult = [];

  let cartTotal = 0;

  const createProductImageElement = (imageSource) => {
    // const img = document.createElement('img');
    // img.className = 'item__image';
    // img.src = imageSource;
    // return img;
  };

  const createCustomElement = (element, className, innerText) => {
    // const e = document.createElement(element);
    // e.className = className;
    // e.innerText = innerText;
    // return e;
  };

  const createProductItemElement = ({ sku, name, image }) => {
    // const section = document.createElement('section');
    // section.className = 'item';
    // section.appendChild(createCustomElement('span', 'item__sku', sku));
    // section.appendChild(createCustomElement('span', 'item__title', name));
    // section.appendChild(createProductImageElement(image));
    // section.appendChild(
    //   createCustomElement('button', 'item__add', 'Adicionar ao carrinho!')
    // );
    // return section;
  };

  const getSkuFromProductItem = (item) => {
    // return item.querySelector('span.item__sku').innerText;
  };

  const subTotal = (price) => {
    // cartTotal -= price;
    // totalContainer.innerText = cartTotal;
  };

  const sumTotal = (data) => {
    // const price = data.salePrice;
    // cartTotal += price;
    // totalContainer.innerText = cartTotal;
  };

  const cartItemClickListener = (event) => {
    // const targetItem = event.target;
    // const itemText = event.target.innerText.split(' | ');
    // const splitId = itemText[0].split(': ');
    // localStorage.removeItem(splitId[1]);
    // const splitPrice = itemText[2].split(': $');
    // subTotal(splitPrice[1]);
    // targetItem.remove();
  };

  const createCartItemElement = ({ sku, name, salePrice }) => {
    // const li = document.createElement('li');
    // li.className = 'cart__item';
    // li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
    // li.addEventListener('click', cartItemClickListener);
    // return li;
  };

  const storeData = (data) => {
    // dataResult = data;
  };

  const addToCartProcess = (productJson) => {
    // const productData = {
    //   sku: productJson.id,
    //   name: productJson.title,
    //   salePrice: productJson.price,
    // };
    // cartList.append(createCartItemElement(productData));
    // localStorage.setItem(productData.sku, JSON.stringify(productData));
    // return productData;
  };

  const toCart = (button) => {
    // const targetParent = button.target.parentElement;
    // const findItemId = targetParent.firstChild.innerText;
    // const fetchIdUrl = `https://api.mercadolibre.com/items/${findItemId}`;
    // fetch(fetchIdUrl)
    //   .then((fetchedProduct) => fetchedProduct.json())
    //   .then((productJson) => addToCartProcess(productJson))
    //   .then((productData) => sumTotal(productData));
  };

  const fetchItems = () => {
    // fetch(apiUrl)
    //   .then((fetchedData) => fetchedData.json())
    //   .then((dataJSON) => dataJSON.results)
    //   .then((toStore) => storeData(toStore))
    //   .then(() =>
    //     dataResult.map((elem) => {
    //       const createProductData = {
    //         sku: elem.id,
    //         name: elem.title,
    //         image: elem.thumbnail,
    //       };
    //       const readyProduct = createProductItemElement(createProductData);
    //       const button = readyProduct.getElementsByClassName('item__add')[0];
    //       button.addEventListener('click', toCart);
    //       itemsSection.append(readyProduct);
    //       return createProductData;
    //     })
    //   );
  };

  const recoverCart = () => {
    // const localStorageKeys = Object.keys(localStorage);
    // localStorageKeys.map((elem) => {
    //   const recoveredItem = localStorage.getItem(elem);
    //   const parsedItem = JSON.parse(recoveredItem);
    //   createCartItemElement(parsedItem);
    //   document
    //     .getElementsByClassName('cart__items')[0]
    //     .append(createCartItemElement(parsedItem));
    //   return parsedItem;
    // });
  };

  const emptyCart = () => {
    // cartList.innerHTML = null;
    // localStorage.clear();
    // subTotal(cartTotal);
  };

  window.onload = () => {
    // fetchItems();
    // recoverCart();
    // emptyButton.addEventListener('click', emptyCart);
    // setTimeout(() => {
    //   loading.remove();
    // }, 1000);
  };

  return (
    <div>
      {/* <div class='loading'>loading...</div> */}
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

export default ShoppingCart;
