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


  printConversation = () => {
    console.log(this.state.conversation.messages);
  }

  addMessageToConversation = (message, conversation) => {
    return {
      ...conversation
      , messages: [
        ...conversation.messages
        , message
      ]
    }
  }

  submitPrompt = async () => {
    const newConversation = this.addMessageToConversation({
      role: "user"
      , content: this.state.prompt.userInput
    }, this.state.conversation);
    this.setState({conversation: newConversation});

    try {
        const response = await axios.post('http://localhost:8080/send-message', this.state.conversation)
        const updatedConversation = this.addMessageToConversation(response.data, newConversation);
        this.setState({
          conversation: updatedConversation
        });
    } catch (error) {
      console.error(error);
    }
  }

  render() {

    return (
    <div className="chat-page-container">

      <div className="text-box-container">
        {this.state.conversation.messages.map((item, index) => (
          <TextBox key={`${index}-${item.content}`} content={`${item.role}: ${item.content}`} />
        ))}
      </div>

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