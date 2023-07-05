import React from 'react';
import { Link } from 'react-router-dom';

function ResearchPage() {
  return (
    <div>
      <h1>Just Kidding!!!</h1>
      <h2>
        We learned most of our coding from Tech Elevator, and whatever we struggled with we used google.
        <br />
        <h3><Link to="/">Home </Link></h3>
      </h2>
    </div>
  );
}

export default ResearchPage;