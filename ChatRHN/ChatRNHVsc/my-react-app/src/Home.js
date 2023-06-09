import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import ChatGPTImage from './ChatGPT.png';
import LogoChatRNHImage from './LogoChatRNH.png';

function Home() {
  return (
    <>
      <h1>Introducing ChatRHN</h1>
      <br />

      <h2>
        We've trained a model called ChatRNH which interacts in an
        <br />
        awkward way. The dialogue format makes it difficult
        <br />
        for ChatRHN to answer questions, admit its mistakes,
        <br />
        challenge premises, and give tons of sass. It may
        <br />
        or may not reject inappropriate requests.
      </h2>

      <div className="button-container">
        <button>
        <b>
            <Link to="/chat" style={{ color: '#FF8BFF' }}>Try ChatRHN</Link>
          </b>
        </button>
        <p className="read-about">
          <Link to="/">
            <u style={{ color: '#FF8BFF' }}>Read about ChatRNH (Just Kidding)</u>
          </Link>
        </p>
        <Outlet /> {}
      </div>

      <div className="chatGPT-image">
        <img src={ChatGPTImage} alt="ChatGPT" style={{ maxWidth: '900px', marginLeft: '-25px' }} />
      </div>

      <img src={LogoChatRNHImage} alt="LogoChatRNH" />
    </>
  );
}

export default Home;

