import React from 'react';
import { Link } from 'react-router-dom';
function ProductsJustKidding() {
  return (
    <div>
      <h1>Just Kidding!!</h1>
      <h2>We are not selling anything.</h2>
      <h3><Link to="/">Home </Link></h3>
    </div>
  );
}

export default ProductsJustKidding;