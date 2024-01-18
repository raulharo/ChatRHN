import React from 'react';
import './MessageBar.css';

const MessageBar = ({setMessage, userInput}) => {

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <textarea
      value={userInput}
      onChange={handleChange}
      placeholder="Type your question"
      className="message-bar-textarea"
    />
  );
};

export default MessageBar;