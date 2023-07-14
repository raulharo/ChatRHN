import React from 'react';

const MessageBar = ({setMessage}) => {

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <textarea
      onChange={handleChange}
      placeholder="Type your question"
    />
  );
};

export default MessageBar;