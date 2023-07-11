import React from 'react';
import './ChatPage.css';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';

function ChatPage() {
  return (
    <div>
      <SearchBar />
      <MessageBar />
    </div>
  );
}

export default ChatPage;