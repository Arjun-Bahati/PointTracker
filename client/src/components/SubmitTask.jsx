import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';





const Submittask = (props) => {
    const [total, setTotal] = useState(0);
    const {id}= useParams();

useEffect(() => {
    axios
    .get("http://localhost:8000/api/total/")
    .then((response) => {
        console.log(response.data);
        setTotal(response.data);
        console.log(total)
    })
    .catch((err) => {
        console.log(err.response);
    });
}, []);
    

    const taskSubmitHandler = (e) =>{
        e.preventDefault();
    }
    return(
        <div>
            <h1 key ={total._id}>{total.points}</h1>
            <Link to="../home"><button>Great job!</button></Link>       
            <Link to={"../"+ id}><button>Nevermind...</button></Link>                
        </div>
    );
}

export default Submittask;