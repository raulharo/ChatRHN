import React from 'react';
import { Link } from 'react-router-dom';

function CompanyPage() {
  return (
    <div>
      <h1>Just Kidding!!!</h1>
      <h2>We're just 2 Jr. Developers having fun</h2>
      <a href="ChatRHN.html">Go back to ChatRHN</a>
      <h2><Link to="/">Go back to Home </Link></h2>
    </div>
  );
}

export default CompanyPage;