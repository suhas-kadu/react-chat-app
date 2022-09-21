import React, { useContext } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from "../firebase"
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className='logo'>Lama Chat</div>
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