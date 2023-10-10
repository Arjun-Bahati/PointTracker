import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const TaskEdit = (props) => {
    const [taskNotFoundError, setTaskNotFoundError] = useState("");
    const [errors, setErrors] = useState([]);
    const [points, setPoints] = useState("");
    const [task, setTask] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/task/' + id)
        .then((response) =>{
            console.log(response.data);
            setTask(response.data.task);
            setPoints(response.data.points)
        })
        .catch((err) => {
            console.log(err);
            setTaskNotFoundError('No task with the given ID')
        }
        )
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const editedTask = {
            task,
            points
        }
        axios
        .put(`http://localhost:8000/api/task/${id}` , editedTask)
        .then((response) => {
            console.log(response);
            navigate("../"+ id);
        })
        .catch((err) => {
            console.log(err)
            const errArray = []
            for ( const key of Object.keys(err.response.data.errors)) {
            errArray.push(err.response.data.errors[key].message);
            }
            setErrors(errArray);
        });
    };

    return(
        <div>
        <Link to="../home">Go back home?</Link>
        <p>Editing this task...</p>
        <form onSubmit={handleSubmit}>
            {taskNotFoundError ? (
                <h2>{taskNotFoundError}</h2>
            ) : null}
        <div>{
            errors.map(( err, index) => {
                return (
                    <p key={index}>{err}</p>
                )}
            )}
        </div>
        <div >
            Task
            <input
                type="string"
                label= "Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <br />
            Points
            <input
                type="number"
                value={points}
                onChange={(e) => {setPoints(e.target.value)}}
            />
            <br />
        </div>
        <button type='submit'>Confirm this edit!</button>
        </form>
        <Link to= {"../" + id}><button>Nevermind...</button></Link>
    </div>
    );
}

export default TaskEdit;