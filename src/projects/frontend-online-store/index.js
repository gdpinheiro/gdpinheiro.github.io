import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/shoppingCart' component={Cart} />
        <Route exact path='/product/:id' component={ProductDetail} />
        <Route exat path='/Checkout' component={Checkout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
