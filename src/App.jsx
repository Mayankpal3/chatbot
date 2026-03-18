import { useState } from 'react'
import ChatInput from './Chatinput'
import Chats from './chat';
import './App.css'

function App() {
      const array = useState([{
        message: 'hello chatbot',
        sender: 'user',
        id: 'id1'
      },
      {
        message: 'Hello! How can I help you?',
        sender: 'robot',
        id: 'id2'
      },
      {
        message: 'can you get me todays date?',
        sender: 'user',
        id: 'id3'
      },
      {
        message: 'Today is September 27',
        sender: 'robot',
        id: 'id4'

      },
      {
        message: 'can you flip a coin',
        sender: 'user',
        id: 'id5'
      },
      {
        message: 'Sure! You got heads',
        sender: 'robot',
        id: 'id6'
      }
      ]);
      const chatMessages = array[0];
      const setchatMessages = array[1];
      return (
        <div className="app-container">
          <Chats
          chatMessages = {chatMessages}
          />
          <ChatInput
            chatMessages={chatMessages}
            setchatMessages={setchatMessages}
          />
        </div>

      );
    }

export default App
