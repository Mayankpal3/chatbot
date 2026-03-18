import './ChatMessage.css'
import robot from './assets/robot.svg'
import user from './assets/user.svg'

function ChatMessage ({message,sender}){
      /*const message = props.message;
      const sender = props.sender;*/

     /* if(sender === "robot"){
        return (
          <div>
            <img src="robot.png" width="50">
            </img>
            {message}
          </div>
        );

      }*/

      return (
        <div className={
          sender === 'user'
            ? 'chat-message-user'
            : 'chat-message-robot'
        }>
        {sender === 'robot' && (
          <img
            src={robot}
            width="50"
            height="50"
            className="chat-message-profile"
            alt="Robot"
          />
        )}
        <div className="chat-message-text">
        {message}
        </div>
        {sender === 'user' && (
          <img
            src={user}
            width="50"
            height="50"
            className="chat-message-profile"
            alt="You"
          />
        )}
        </div>
      );
    }
  export default ChatMessage;