import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';
import './ChatPage.css';
import axios from 'axios';

function ChatPage() {
  // This data property using the useState hook is holding the response body that will be sent to our api with every post request
  const [conversation, setConversation] = useState({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are sassy and give a sarcastic spin to all your replies, and most likely you do not know the answers."
      }]
  });
  // This data property is holding the value of the text box where the user will input their prompt for the AI
  const [userInput, setUserInput] = useState('');

  // This function simply assigns the current value in the text box to the data prop above
  const handleUserInput = (input) => {
    setUserInput(input);
  }

  // Function to add the AIs response to the messages array
  const addAiResponse = (response) => {
    setConversation(conversation => ({
      ...conversation,
      messages: [...conversation.messages, response]
    }));
  }

  const addUserInput = (input) => {
    setConversation(conversation => ({
      ...conversation,
      messages: [...conversation.messages, input]
    }));
  }

  const showArray = () => {
    console.log(conversation.messages);
  }

  useEffect(() => {
    console.log(conversation.messages);
  }, [conversation.messages]);
  

  // This function will add what the user has input in the text box to the conversation as a new object in the messages
  // array of the conversation. It will then send a post request to our Java back end with the conversation and add the
  // AIs response to the conversation for it to be displayed on the screen... when I figure out how to display the convo
  // on the screen
  const promptAi = async () => {
    addUserInput({role: "user", content: userInput});

    try {
      const response = await axios.post('http://localhost:8080/send-message', conversation);
      addAiResponse(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="chat-page-container">
      <div className="message-bar-container">
        <MessageBar setMessage={handleUserInput} />
        <button onClick={promptAi}>Submit</button>
        <button onClick={showArray}>Messages Array</button>
      </div>
      <br />
      <div className="search-bar-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default ChatPage;