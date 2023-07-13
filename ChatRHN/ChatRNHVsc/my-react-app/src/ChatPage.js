import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';
import './ChatPage.css';
import axios from 'axios';

const ChatPage = () => {
  // This data property using the useState hook is holding the response body that will be sent to our api with every post request
  const [conversation, setConversation] = useState({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "You are sassy and give a sarcastic spin to all your replies, and most likely you do not know the answers."
      }]
  });
  // This data property is holding the value of the text box where the user will input their prompt for the AI
  const [userInput, setUserInput] = useState('');

  // This function simply assigns the current value in the text box to the data prop above
  const handleUserInput = (input) => {
    setUserInput(input);
  }

  // This function will add what the user has input in the text box to the conversation as a new object in the messages
  // array of the conversation. It will then send a post request to our Java back end with the conversation and add the
  // AIs response to the conversation for it to be displayed on the screen... when I figure out how to display the convo
  // on the screen
  const promptAi = async () => {
    let newMessage = {role: "user", content: userInput};
    setConversation(prevState => ({
      ...prevState,
      messages: [...prevState.messages, newMessage]
    }));

    try {
      const response = await axios.post('http://localhost:8080/send-message', conversation);
      addAiResponse(response);
      console.log(conversation.messages);
    }
    catch (error) {
      console.log(error);
    }
  }

  // Function to add the AIs response to the messages array
  const addAiResponse = (response) => {
    setConversation(prevState => ({
      ...prevState,
      messages: [...prevState.messages, response]
    }));
  }

  return (
    <div className="chat-page-container">
      <div className="message-bar-container">
        <MessageBar setMessage={handleUserInput}/>
        <button onClick={promptAi}>Submit</button>
      </div>
      <br />
      <div className="search-bar-container">
        <SearchBar />
      </div>
    </div>
  );
}

export default ChatPage;