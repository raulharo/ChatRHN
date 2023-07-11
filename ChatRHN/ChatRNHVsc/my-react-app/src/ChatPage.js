import React from 'react';
import './ChatPage.css';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';

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