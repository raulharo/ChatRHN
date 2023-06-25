import React from 'react';
import './App.css';
import ChatGPTImage from './ChatGPT.png';
import LogoChatRNHImage from './LogoChatRNH.png';

function App() {
  return (
    <div className="App">
      <div className="router-links">
        <div className="router-links">
          <h3><a href="ResearchPage">Research v</a></h3>
          <h3><a href="ProductPage">Product v</a></h3>
          <h3><a href="DevelopersPage">Developers v</a></h3>
          <h3><a href="SafetyPage">Safety v</a></h3>
          <h3><a href="CompanyPage">Company v</a></h3>
        </div>
      </div>

      <div className="fake-links">
        <h3>Search</h3>
        <h3>Login </h3>
        <h3><a href="#">Sign Up</a></h3>
      </div>

      <h1>Introducing ChatRHN</h1>

      <h2>
        We’ve trained a model called ChatRNH which interacts in an
        <br />
        awkward way. The dialogue format makes it difficult
        <br />
        for ChatRHN to answer questions, will not admit its mistakes,
        <br />
        and challenge premises, will give tons of sass, and may
        <br />
        or may not reject inappropriate requests.
      </h2>

      <div className="button-container">
        <a href="ChatRNHSearch.html">
          <button>
            <b>Try ChatRHN</b>
          </button>
        </a>
        <p className="read-about">
          <u>Read about ChatRNH NOT</u>
        </p>
      </div>
      <div className="chatGPT-image">
      <img src={ChatGPTImage} alt="ChatGPT" style={{ maxWidth: '800px', marginLeft: '75px' }} />
      </div>

      <img src={LogoChatRNHImage} alt="LogoChatRNH" />
    </div>
  );
}

export default App;