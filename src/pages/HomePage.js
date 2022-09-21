import React from 'react'
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
    return (
        <div className='home'>
            <div className='container'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default HomePage;