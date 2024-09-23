import React from 'react';
import './chat.css'
import Chatbox from '../../components/chat box/chatbox';
import Leftsidebar from '../../components/left sidebar/leftsidebar';
import Rightsidebar from '../../components/right sidebar/rightsidebar';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <Leftsidebar/>
        <Chatbox/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Chat