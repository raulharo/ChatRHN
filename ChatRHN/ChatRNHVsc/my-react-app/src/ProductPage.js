import React from 'react';
import { Link } from 'react-router-dom';
function ProductsJustKidding() {
  return (
    <div>
      <h1>Just Kidding!!</h1>
      <h2>We are not selling anything.</h2>
      <br />
      <br />
      <Link to="/" className="fake-chat-link">Go back to ChatRHN Home</Link>
    </div>
  );
}

export default ProductsJustKidding;