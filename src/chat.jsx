import ChatMessage from "./ChatMessage";
import { useRef , useEffect } from "react";
import './chat.css'

function Chats({chatMessages}) {
   const refElement = useRef(null);
    useEffect(()=>{
      const containerEleme = refElement.current ;
      if(containerEleme){
        containerEleme.scrollTop = containerEleme.scrollHeight;
      };
    },[chatMessages]);
    return (
      <div className="chat-messages-container" ref={refElement}>
        {chatMessages.map((Chat) => {
          return (
            <ChatMessage
              message={Chat.message}
              sender={Chat.sender}
              key = {Chat.id}
            />
          );
        })}
      </div>);
}
export default Chats;
