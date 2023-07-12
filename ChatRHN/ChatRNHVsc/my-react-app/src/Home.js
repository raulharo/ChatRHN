import React from 'react';
<<<<<<< HEAD
import ChatPage from './ChatPage';
import { Link, Routes, Route } from 'react-router-dom';
=======
import { Link, Outlet } from 'react-router-dom';
>>>>>>> main

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
<<<<<<< HEAD
        
          <button>
            <b ><Link to ="/Chat"> Try ChatRHN</Link></b>
          </button>
=======
        <button>
        <b>
            <Link to="/chat" style={{ color: '#FF8BFF' }}>Try ChatRHN</Link>
          </b>
        </button>
>>>>>>> main
        <p className="read-about">
        <Link to="/">
          <u style={{ color: '#FF8BFF' }}>Read about ChatRNH (Just Kidding)</u>
        </Link>
        </p>
        <Routes>

        <Route path="/" element={<ChatPage />}> </Route>

      </Routes>

      </div>

      <div className="chatGPT-image">
        <img src={ChatGPTImage} alt="ChatGPT" style={{ maxWidth: '900px', marginLeft: '-25px' }} />
      </div>

      <img src={LogoChatRNHImage} alt="LogoChatRNH" />
    </>
  );
}

export default Home;

