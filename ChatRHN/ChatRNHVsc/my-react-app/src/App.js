import React from 'react';
import './App.css';
import ResearchPage from './ResearchPage';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';
import DevelopersPage from './DevelopersPage';
import SafetyPage from './SafetyPage';
import CompanyPage from './CompanyPage';
function App() {
  return (
    <div className="App">
      <div className="router-links">
        <div className="router-links">
          
          <h3> <Link to ="/research">Research v </Link> </h3>
          <h3><Link to ="/product">Product v</Link></h3>
          <h3><Link to ="/developer">Developers v</Link></h3>
          <h3><Link to ="/safety">Safety v</Link></h3>
          <h3><Link to ="/company">Company v</Link></h3>
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
        <Route path="/developer" element={<DevelopersPage />}> </Route>
        <Route path="/safety" element={<SafetyPage />}> </Route>
        <Route path="/company" element={<CompanyPage />}> </Route>

      </Routes>
    </div>
  );
}

export default App;