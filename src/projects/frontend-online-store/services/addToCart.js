function saveToStorage(product) {
  let storageCart = JSON.parse(localStorage.getItem('cart'));
  if (!storageCart) {
    storageCart = [];
    product.quantity = 1;
    storageCart.push(product);
    return localStorage.setItem('cart', JSON.stringify(storageCart));
  }
  const itemFound = storageCart.find((item) => product.id === item.id);
  if (itemFound) {
    itemFound.quantity += 1;
  } else {
    product.quantity = 1;
    storageCart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(storageCart));
}

export default function (product) {
  saveToStorage(product);
}
