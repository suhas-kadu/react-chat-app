// built-in imports
import React, { useContext, useEffect, useState } from 'react'

// user defined imports
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db } from '../firebase';

// third party imports
import { doc, onSnapshot } from 'firebase/firestore';

const Chats = () => {

    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);

    const { dispatch } = useContext(ChatContext);


    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);


    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u })
    }

    console.log(chats);
    return (
        <div className='chats'>

            {
                Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
                    <div
                        className='userchat'
                        key={chat[0]}
                        onClick={() => handleSelect(chat[1].userInfo)}
                    >
                        <img src={chat[1].userInfo.photoURL} alt="" />
                        <div className='userchat-info'>
                            <span>
                                {chat[1].userInfo.displayName}
                            </span>
                            <p>
                                {chat[1].lastMessage?.text}
                            </p>
                        </div>
                    </div>
                ))
            }
            {/*             
            <div className='userchat'>
                <img src='https://images.unsplash.com/photo-1663187223787-2ffb84a407fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='' />
                <div className='userchat-info'>
                    <span>John</span>
                    <p>Hello</p>
                </div>
            </div> */}

        </div>
    )
}

export default Chats