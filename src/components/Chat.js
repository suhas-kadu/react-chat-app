import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext';
import Cam from "../img/cam.png";
import Img from "../img/img.png";
import More from "../img/more.png";
import Input from './Input';
import Messages from './Messages';



const Chat = () => {

    const { data } = useContext(ChatContext);

    return (
        <div className='chat'>
            <div className='chat-info'>
                <span> {data.user?.displayName} </span>
                <div className='chat-icons'>
                    <img src={Cam} alt='' />
                    <img src={Img} alt='' />
                    <img src={More} alt='' />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat;