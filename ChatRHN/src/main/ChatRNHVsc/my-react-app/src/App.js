import React from 'react';
import './App.css';
import ResearchPage from './ResearchPage';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';

function App() {
  return (
    <div className="App">
      <div className="router-links">
        <div className="router-links">
          
          <h3> <Link to ="/research">Research v </Link> </h3>
          <h3><Link to ="/product">Product v</Link></h3>
          <h3><a href="DevelopersPage">Developers v</a></h3>
          <h3><a href="SafetyPage">Safety v</a></h3>
          <h3><a href="CompanyPage">Company v</a></h3>
        </div>
      </div>




      <div className="fake-links">
        <h3>Search</h3>
        <h3>Login </h3>
        <h3><Link to ="/"> Sign Up</Link></h3>
      </div>


      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/research" element={<ResearchPage />}> </Route>
        <Route path="/product" element={<ProductPage />}> </Route>

      </Routes>
    </div>
  );
}

export default App;