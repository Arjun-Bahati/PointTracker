import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from "react";
import "../styling/Homepage.css"

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
            if (response.data.total == 0 || null || undefined){
                setTotal(0)
            } else{ setTotal(response.data.total)}
            console.log(total)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return(
        <div className='home'>
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
            <h2>You currently have: {total} Points!</h2>
        </div>
    );
}

export default Homepage;