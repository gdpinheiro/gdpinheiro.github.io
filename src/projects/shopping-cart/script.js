const apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=$computador';

const loading = document.getElementsByClassName('loading')[0];

const itemsSection = document.getElementsByClassName('items')[0];

const emptyButton = document.getElementsByClassName('empty-cart')[0];

const cartList = document.getElementsByClassName('cart__items')[0];

const totalContainer = document.getElementsByClassName('total-price')[0];

let dataResult = [];

let cartTotal = 0;

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(
    createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
  );
  return section;
}

// function getSkuFromProductItem(item) {
// return item.querySelector('span.item__sku').innerText;
// }

function subTotal(price) {
  cartTotal -= price;
  totalContainer.innerText = cartTotal;
}

function sumTotal(data) {
  const price = data.salePrice;
  cartTotal += price;
  totalContainer.innerText = cartTotal;
}

function cartItemClickListener(event) {
  const targetItem = event.target;
  const itemText = event.target.innerText.split(' | ');
  const splitId = itemText[0].split(': ');
  localStorage.removeItem(splitId[1]);
  const splitPrice = itemText[2].split(': $');
  subTotal(splitPrice[1]);
  targetItem.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function storeData(data) {
  dataResult = data;
}

function addToCartProcess(productJson) {
  const productData = {
    sku: productJson.id,
    name: productJson.title,
    salePrice: productJson.price,
  };
  cartList.append(createCartItemElement(productData));
  localStorage.setItem(productData.sku, JSON.stringify(productData));
  return productData;
}

function toCart(button) {
  const targetParent = button.target.parentElement;
  const findItemId = targetParent.firstChild.innerText;
  const fetchIdUrl = `https://api.mercadolibre.com/items/${findItemId}`;
  fetch(fetchIdUrl)
    .then((fetchedProduct) => fetchedProduct.json())
    .then((productJson) => addToCartProcess(productJson))
    .then((productData) => sumTotal(productData));
}

function fetchItems() {
  fetch(apiUrl)
    .then((fetchedData) => fetchedData.json())
    .then((dataJSON) => dataJSON.results)
    .then((toStore) => storeData(toStore))
    .then(() =>
      dataResult.map((elem) => {
        const createProductData = {
          sku: elem.id,
          name: elem.title,
          image: elem.thumbnail,
        };
        const readyProduct = createProductItemElement(createProductData);
        const button = readyProduct.getElementsByClassName('item__add')[0];
        button.addEventListener('click', toCart);
        itemsSection.append(readyProduct);
        return createProductData;
      }));
}

function recoverCart() {
  const localStorageKeys = Object.keys(localStorage);
  localStorageKeys.map((elem) => {
    const recoveredItem = localStorage.getItem(elem);
    const parsedItem = JSON.parse(recoveredItem);
    createCartItemElement(parsedItem);
    document
      .getElementsByClassName('cart__items')[0]
      .append(createCartItemElement(parsedItem));
    return parsedItem;
  });
}

function emptyCart() {
  cartList.innerHTML = null;
  localStorage.clear();
  subTotal(cartTotal);
}

window.onload = () => {
  fetchItems();
  recoverCart();
  emptyButton.addEventListener('click', emptyCart);
  setTimeout(() => {
    loading.remove();
  }, 1000);
};
