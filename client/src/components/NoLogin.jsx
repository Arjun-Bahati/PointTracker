import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styling/NoLogin.css"
import LoginPage from "./LoginPage";

const NoLogin = (props) => {
    return(
        <div className="nologin">
            <h1>Point Tracker v1</h1>
            <LoginPage/>
            <h3>Don't have an account? <Link to="register">Click here to sign up!</Link></h3>
        </div>
    );
}

export default NoLogin;