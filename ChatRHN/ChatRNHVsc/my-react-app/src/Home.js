import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ChatGPTImage from './ChatGPT.png';
import LogoChatRNHImage from './LogoChatRNH.png';

function Home() {
  return (
    <>
      <h1>Introducing ChatRHN</h1>
      <br />
      
      <div className="info">
      <h2>
        We've trained a model called ChatRNH which interacts in
        <br />
        an anwkward way. The dialogue format makes it difficult for 
        <br />
        ChatRHN to answer questions, admit its mistakes, challenge 
        <br />
        premises, and give tons of sass. It may or may not reject
        <br />
         inappropriate requests.
      </h2>
      </div>

      <div className="button-container">
        <button>
          <b>
            <Link to="/chat" className="chat-link">Try ChatRHN</Link>
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
        <img src={ChatGPTImage} alt="ChatGPT" />
      </div>

      <img src={LogoChatRNHImage} alt="LogoChatRNH" />
    </>
  );
}

export default Home;

