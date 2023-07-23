import React from 'react';
import SearchBar from './SearchBar';
import MessageBar from './MessageBar';
import './ChatPage.css';
import axios from 'axios';
import TextBox from './TextBox';

class ChatPage extends React.Component {
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
    const {conversation} = this.state.conversation.messages.shift;

    return (
    <div className="chat-page-container">
      <div className="message-bar-container">
        <MessageBar setMessage={this.handleUserInput} />
        <button onClick={this.submitPrompt}>Submit</button>
        <button onClick={this.printConversation}>Messages</button>
      </div>
      <br />
      <div className="text-box-container">
        {conversation.map(item => (
          <TextBox key={item.content} content={item.content}></TextBox>
        ))};
      </div>
      <div className="search-bar-container">
        <SearchBar />
      </div>
    </div>
    );
  }
}

export default ChatPage;