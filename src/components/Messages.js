// built-in imports
import React, { useContext, useEffect, useState } from 'react';

// user defined imports
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';
import Message from './Message';

// third party imports
import { doc, onSnapshot } from 'firebase/firestore';


const Messages = () => {

    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {

        const unSub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub();
        }

    }, [data.chatID])

    console.log(messages);

    return (
        <div className='messages'>
            {
                messages.map((m) => {
                    return <Message message={m} key={m.id} />
                })
            }
        </div>
    )
}

export default Messages