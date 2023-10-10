import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styling/SubmitTask.css"

const Submittask = (placeholderID) => {
    const [total, setTotal] = useState([]);
    const {id}= useParams();
    const [taskview, setTaskview] = useState([]);
useEffect(() => {
    axios
    .get("http://localhost:8000/api/total/")
    .then((response) => {
        console.log(response);
        setTotal(response.data[1])
        console.log(total)
    })
    .catch((err) => {
        console.log(err);
    });
}, []);
useEffect(() => {
    axios
    .get("http://localhost:8000/api/task/"+ id)
    .then((response) => {
        setTaskview(response.data);
    })
    .catch((err) => {
        console.log(err.response);
    });
}, []);
    const taskSubmitHandler = (e) =>{
        e.preventDefault();
        const newTotal = {
            total
        }
        axios
        .put(`http://localhost:8000/api/total/` + placeholderID, newTotal)
        .then((response) =>{
            console.log(response);
            navigate("../home")
        })
        .catch((err) =>{
            console.log(err.response.data)
        })

    }
    return(
        <div className='submit'>
            <h2>Task: {taskview.task}</h2>
            <h2>Point Value: {taskview.points}</h2>
            <h3>You currently have {total} points.</h3>
            <Link to="../home"><button onClick={taskSubmitHandler}>Great job!</button></Link>       
            <Link to={"../"+id}><button>Nevermind...</button></Link>                
        </div>
    );
}

export default Submittask;