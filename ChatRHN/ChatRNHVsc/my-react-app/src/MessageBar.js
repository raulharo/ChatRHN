import React from 'react';

const MessageBar = ({setMessage, userInput}) => {

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <textarea
      value={userInput}
      onChange={handleChange}
      placeholder="Type your question"
    />
  );
};

export default MessageBar;