import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';
import './ChatPage.css';
import axios from 'axios';

// This ChatPage is currently under construction. The big "bug" at the moment is that useState hooks are
// asynchronous; so when we add the user's question for the AI to the messages array in the state, the state
// is not updated immediately and so the promptAi() function won't have the updated messages array to send in
// the API call to gpt-3.5-turbo. We need to figure out a way to make sure that the state is updated BEFORE the promptAi()
// function is called or find a synchronous way to modify data.

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

  // Supposedly updates the state when there is a change made to it, but doesn't seem to work
  useEffect(() => {
    console.log(conversation.messages);
  }, [conversation.messages]);

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

  // Adds the user's input into the messages array
  const addUserInput = () => {
    let newMessage = {role: "user", content: userInput};

    setConversation(conversation => ({
      ...conversation,
      messages: [...conversation.messages, newMessage]
    }));
  }

  // Just shows what the current array looks like in the console
  const showArray = () => {
    console.log(conversation.messages);
  }

  // This function will take the current conversation state and send it to the Java backend which
  // will make an API call to the OpenAI API
  const promptAi = async () => {
    try {
      const response = await axios.post('http://localhost:8080/send-message', conversation);
      return response.data;
    }
    catch (error) {
      console.log(error);
    }
  }

  // Attempt to see if calling addUserInput and promptAi separately would let the state update before
  // the promptAi method is called
  function runPrompt() {
    addUserInput();

    let aiMessage = promptAi();

    addAiResponse(aiMessage);
  }

  return (
    <div className="chat-page-container">
      <div className="message-bar-container">
        <MessageBar setMessage={handleUserInput} />
        <button onClick={runPrompt}>Submit</button>
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