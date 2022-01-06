import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function FrontendOnlineStore() {
  return (
    <Routes>
      <Route path='/' component={Home} />
      <Route path='/shoppingCart' component={Cart} />
      <Route path='/product/:id' component={ProductDetail} />
      <Route path='/Checkout' component={Checkout} />
    </Routes>
  );
}

export default FrontendOnlineStore;
