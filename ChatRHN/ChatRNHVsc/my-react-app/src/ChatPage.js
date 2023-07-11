import React from 'react';
import './ChatPage.css';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';

function ChatPage() {
  return (
    <div>
      
      <MessageBar />
      <br />

      <SearchBar />
    </div>
  );
}

export default ChatPage;