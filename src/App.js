import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Product'
import ProductIndex from './components/ProductIndex'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css';


function App() {

  const [CartItems, setCartItems] = useState([])
  const addToCart = (item) => {
    setCartItems([...CartItems, { ...item }])
  }
  const removeFromCart = (removedItem) => {
    setCartItems(CartItems.filter((x) => x !== removedItem))
  }


  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} >
          <Route path="/" element={<ProductIndex addToCart={addToCart} />} />
          <Route path=":productID" element={<ProductDetails addToCart={addToCart} />} />
        </Route>
        <Route path="cart" element={<Cart removeFromCart={removeFromCart} CartItems={CartItems} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
