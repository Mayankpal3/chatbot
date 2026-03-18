import { useState } from 'react'
import './Chatinput.css'


function getBotResponse(input) {
  const text = String(input ?? '').trim().toLowerCase();
  if (!text) return "Say something and I'll reply.";

  if (text.includes('date') || text.includes("today's date") || text.includes('todays date')) {
    return new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  if (text.includes('time')) {
    return new Date().toLocaleTimeString();
  }

  if (text.includes('flip') && text.includes('coin')) {
    return `You got ${Math.random() < 0.5 ? 'heads' : 'tails'}.`;
  }

  if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
    return 'Hi! What would you like to chat about?';
  }

  return "I'm a simple demo bot. Try asking for today's date, the time, or to flip a coin.";
}

    function ChatInput({setchatMessages,chatMessages}){
      const [inputMessage , setInputMessage] = useState('');
      function saveInput(event){
        setInputMessage(event.target.value);
      }
      function sendMessage(){
        const trimmed = inputMessage.trim();
        if (!trimmed) return;
        const newchatmessage = [...chatMessages,
        {
          message: trimmed,
          sender: 'user',
          id: crypto.randomUUID()
        }
      ];

        setchatMessages(newchatmessage);

        const response = getBotResponse(trimmed);
        setchatMessages([
          ...newchatmessage,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);
  
        setInputMessage(''); 
}
      return (
        
        <div className="chat-input-container">
        <input
          placeholder="Send a message to Chatbot"
          size="30"
          onChange={saveInput}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
          value={inputMessage}
          className="chat-input"
        />
        <button onClick={sendMessage} className="send-button">send</button>
        </div>
        
      );
    }
export default ChatInput;