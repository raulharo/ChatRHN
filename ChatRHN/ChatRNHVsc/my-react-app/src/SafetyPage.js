import React from 'react';
import { Link } from 'react-router-dom';


function SafetyPage() {
  return (
    <div>
      <h1>If you do not like jokes </h1>
      <h2>This is not for you. Do not</h2><br />
      <br />
      <h2 ><Link to="/" style={{ color: '#FF8BFF' }}>Go back to ChatRHN Home </Link></h2>
    </div>
  );
}

export default SafetyPage;