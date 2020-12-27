import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <nav className={'header'}>
      <Link className={'navs'} to='/'>Home</Link> { ' '}
      <Link className={'navs'} to="product">Product</Link>{' '}
      <Link className={'navs'} to="cart">Cart</Link>
    </nav>
  );
}

export default Header;
