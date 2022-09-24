// built-in imports

// user defined imports
import { auth } from "../firebase";

// third party imports
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {


    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }

    return (<div>

        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo"> CLICK-CHAT</span>
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