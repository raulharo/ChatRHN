import React from 'react';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';
import './ChatPage.css';

function ChatPage() {
  return (
    <div className="chat-page-container">
      <div className="message-bar-container">
        <MessageBar />
      </div>
      <br />
      <div className="search-bar-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default ChatPage;