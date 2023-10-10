import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import "../styling/LoginPage.css"

const LoginPage = ({setLoggedUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", {email, password}, {withCredentials: true})
            .then( res => {
                const userToLogin = {
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email
                }
                console.log(res.data);
                setLoggedUser(userToLogin);
                navigate("/dashboard");
            })
    }

    return(
    <div className='login'>
        <form className="loginform" onSubmit={loginHandler}>
            <h3>Already a member? Log in here!</h3>
            <div>
                <label>Email:      </label>
                <input className="logintext" type="text" value={email} onChange={ e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input className="logintext" type="password" value={password} onChange={ e => setPassword(e.target.value)} />
            </div>
            <button>Log In</button>
        </form>
    </div>
    );
}

export default LoginPage;