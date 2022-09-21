import "../style.scss";
import Add from "../img/addAvatar.png"
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const LoginPage = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            setErr(true);
        }
    }

    return (<div>

        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo"> Chat</span>
                <span className="title"> Login</span>
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />

                    <button >Login</button>

                </form>
                <p>Don't have an account ? Sign-up <Link to="/register">here</Link> </p>
            </div>
        </div>

    </div>);
}

export default LoginPage;