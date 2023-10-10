import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NoLogin = (props) => {
    return(
        <div>
            <h1>Point Tracker v1</h1>
            <button>Sign in to get started!</button>
            <h3>Don't have an account? <Link>Click here to sign up!</Link></h3>
        </div>
    );
}

export default NoLogin;