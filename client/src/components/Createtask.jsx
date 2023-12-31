import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import "../styling/Createtask.css"

const Createtask = (props) => {
    const [taskNotFoundError] = useState("");
    const [points, setPoints] = useState('');
    const [task, setTask] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task,
            points,
        }
        axios
        .post("http://localhost:8000/api/task", newTask)
        .then((response) => {
            console.log(response);
            navigate("../home");
        })
        .catch((err) => {
            console.log(err.response.data)
            const errArray = []
            for ( const key of Object.keys(err.response.data.errors)) {
            errArray.push(err.response.data.errors[key].message);
            }
            setErrors(errArray);
        });
    };
    return(
            <div className='create'>
                <Link to="../home">Go back home?</Link>
                <p>Create a new task!</p>
                <form onSubmit={handleSubmit}>
                    {taskNotFoundError ? (
                        <h2>{taskNotFoundError}</h2>
                    ) : null}
                <div style={{color:'red'}}>
                    {
                    errors.map((err, index) => {
                        return (
                            <p key={index}>{err}</p>
                        )}
                    )}
                </div >
                <div className='createForm'>
                    Task: 
                    <input
                        type="string"
                        label= "Task"
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <br />
                    Points:
                    <input
                        type="number"
                        onChange={(e) => setPoints(e.target.value)}
                    />
                    <br />
                </div>
                <button type="submit">Add this task</button>
                </form>
            </div>
    );
}

export default Createtask;