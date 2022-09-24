// built-in imports
import React, { useContext } from 'react'

// user defined imports
import { auth } from "../firebase"
import { AuthContext } from '../context/AuthContext';

// third party imports
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className='logo'>CLICK-CHAT</div>
            <div className='user'>
                <img src={currentUser.photoURL} alt='' />
                <span>{currentUser.displayName}</span>
                <button onClick={
                    () => signOut(auth).then(() => {

                        console.log("Sign-out successful.")
                    }).catch((error) => {
                        // An error happened.
                        console.log(error)
                    })

                }

                >Logout</button>
            </div>
        </div >
    )
}

export default Navbar