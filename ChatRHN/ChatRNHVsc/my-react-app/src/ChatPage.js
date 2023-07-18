import React from 'react';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';
import './ChatPage.css';
import axios from 'axios';

// This ChatPage is currently under construction. The big "bug" at the moment is that useState hooks are
// asynchronous; so when we add the user's question for the AI to the messages array in the state, the state
// is not updated immediately and so the promptAi() function won't have the updated messages array to send in
// the API call to gpt-3.5-turbo. We need to figure out a way to make sure that the state is updated BEFORE the promptAi()
// function is called or find a synchronous way to modify data.

class ChatPage extends React.Component {
  // This data property using the useState hook is holding the response body that will be sent to our api with every post request
  constructor(props) {
    super(props);
    this.state = {
      conversation: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are sassy and give a sarcastic spin to all your replies, and most likely you do not know the answers."
          }]
      },
      prompt: { 
        userInput: "" 
      }
    }
  }

  handleUserInput = (value) => {
    this.state.prompt.userInput = value;
  }

  addUserInput = () => {
    let tempArray = this.state.conversation.messages;
    let newMessage = {role: "user", content: this.state.prompt.userInput};

    tempArray.push(newMessage);

    this.state.conversation.messages = tempArray;
  }

  printConversation = () => {
    console.log(this.state.conversation.messages);
  }

  submitPrompt = () => {
    this.addUserInput();

    try {
      axios.post('http://localhost:8080/send-message', this.state.conversation).then(response => {
        let tempArray = this.state.conversation.messages;

        tempArray.push(response.data);

        this.state.conversation.messages = tempArray;
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {

    return (
    <div className="chat-page-container">
      <div className="search-bar-container">
        <SearchBar />
      </div>
      <br />
      
      <div className="message-bar-container">
        <MessageBar setMessage={this.handleUserInput} />
        <button onClick={this.submitPrompt}>Submit</button>
        <button onClick={this.printConversation}>Messages</button>
      </div>
     
      
    </div>
    );
  }
}

export default ChatPage;