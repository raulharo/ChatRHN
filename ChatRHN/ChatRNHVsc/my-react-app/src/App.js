import React from 'react';
import './App.css';
import ResearchPage from './ResearchPage';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';
import DevelopersPage from './DevelopersPage';
import SafetyPage from './SafetyPage';
import CompanyPage from './CompanyPage';
import ChatPage from './ChatPage'; 

function App() {
  return (
    <div className="App">
      <div className="router-links">
        <div className="router-links">
          <h3><Link to="/research">Research v</Link></h3>
          <h3><Link to="/product">Product v</Link></h3>
          <h3><Link to="/developer">Developers v</Link></h3>
          <h3><Link to="/safety">Safety v</Link></h3>
          <h3><Link to="/company">Company v</Link></h3>
        </div>
      </div>

      <div className="fake-links">
        <h3>Search</h3>
        <h3>Login</h3>
        <h3 style={{ border: '2px solid #FF8BFF;', padding: '7px' }}>Sign Up</h3>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/developer" element={<DevelopersPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/chat" element={<ChatPage />} /> 
      </Routes>
    </div>

    
  );
}

export default App;