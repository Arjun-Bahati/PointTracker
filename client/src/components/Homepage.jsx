import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from "react";

const Homepage = ({total, setTotal}) => {   
    
    const [tasks, setTasks] = useState([])

    useEffect(() =>{
        axios
        .get("http://localhost:8000/api/task")
        .then((response) =>{
            console.log(response.data)
            setTasks(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() =>{
        axios
        .get("http://localhost:8000/api/total")
        .then((response) =>{
            console.log(response.data)
            setTotal(response.data.points)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return(
        <>
            <Link to="../create"><button>Add a task!</button></Link>
            <table>
                <tbody>
                    {tasks.map((task, index) => {
                                return (
                                    <tr key={task._id}>
                                        <td><Link to={`../${task._id}`}>{task.task}</Link></td>
                                    </tr>
                                )
                            })}
                </tbody>
            </table>
            <h1>You currently have:</h1>
            <h2>{total} Points!</h2>
        </>
    );
}

export default Homepage;