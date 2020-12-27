import React from 'react'
import { Outlet } from 'react-router-dom';
import '../App.css';

function Products() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white", backgroundColor: "navy" }}>Products</h1>

      <Outlet></Outlet>
    </div>
  );
}

export default Products;
