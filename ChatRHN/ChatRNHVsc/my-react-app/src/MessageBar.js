import React, { useState } from 'react';

const MessageBar = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <textarea
      value={message}
      onChange={handleChange}
      placeholder="Type your message..."
    />
  );
};

export default MessageBar;