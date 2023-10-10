import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "../styling/Register.css"
const Register = ({setLoggedUser}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const registerHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", {firstName, lastName, email, password, confirmPassword}, {withCredentials: true})
            .then( res => {
                setLoggedUser({
                    _id: res.data._id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email
                })
                navigate("/dashboard")
            })
    }

    return(
    <div className='register'>
        <form className='registerform' onSubmit={registerHandler}>
            <h3>Sign up here!</h3>
            <div>
                <label>First Name: </label>
                <input className="registertext" type="text" value={firstName} onChange={ e => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input className="registertext" type="text" value={lastName} onChange={ e => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input className="registertext" type="email" value={email} onChange={ e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input className="registertext" type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input className="registertext" type="password" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)}/>
            </div>
            <button>Register</button>
        </form>
    </div>
    );
}

export default Register;