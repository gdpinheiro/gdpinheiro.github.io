function saveToStorage(product) {
  const storageCart = JSON.parse(localStorage.getItem('cart'));
  const itemFound = storageCart.find((item) => product.id === item.id);
  if (itemFound.quantity > 1) {
    itemFound.quantity -= 1;
  } else {
    const index = storageCart.indexOf(itemFound);
    storageCart.splice(index, 1);
  }
  localStorage.setItem('cart', JSON.stringify(storageCart));
}

export default saveToStorage;
