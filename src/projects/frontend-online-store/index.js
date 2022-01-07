import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function FrontendOnlineStore() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shoppingCart' element={<Cart />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/Checkout' element={<Checkout />} />
    </Routes>
  );
}

export default FrontendOnlineStore;
