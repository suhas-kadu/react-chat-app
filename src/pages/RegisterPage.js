
// built-in imports
import { useState } from "react";

// user defined imports
import Add from "../img/addAvatar.png"
import { auth, storage, db } from "../firebase.js";

// third party imports
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const RegisterPage = () => {


    const [, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {

                getDownloadURL(storageRef).then(async (downloadURL) => {

                    try {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        })
                    } catch (err) {
                        setError(true);
                        setErrorMessage(err);
                        console.log(errorMessage);
                    }

                    await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL
                    });
                    //create empty user chats on firestore
                    await setDoc(doc(db, "userChats", res.user.uid), {});
                    navigate("/")
                });



            });
        } catch (err) {
            setError(true);
            setErrorMessage(err);
        }



    }

    return (
        <div>
            <div className="form-container">
                <div className="form-wrapper">
                    <span className="logo">CLICK-CHAT</span>
                    <span className="title"> Register</span>
                    <form onSubmit={onSubmit}>

                        <input type="text" placeholder="display name" />
                        <input type="email" placeholder="email" />
                        <input type="password" placeholder="password" />
                        <label htmlFor="file"><img src={Add} alt="" />
                            Add an avatar
                        </label>
                        <input style={{ display: "none" }} type="file" id="file" />

                        <button>Sign up</button>

                    </form>
                    <p>Already have an account ? Log-in <Link to="/register">here</Link></p>
                </div>
            </div>

        </div>);
}

export default RegisterPage;