// built-in imports

// user defined imports
import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'

// third party imports

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar