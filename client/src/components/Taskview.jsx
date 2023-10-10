import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Taskview = (props) => {
    const [taskview, setTaskview] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/task/"+ id)
        .then((response) => {
            console.log(response.data);
            setTaskview(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const deleteTask = (buttonID) => {
        axios.delete(`http://localhost:8000/api/task/${buttonID}`)
            .then((res) => {
                console.log(res.data);
                navigate("../home")
            })
            .catch((err) => {
                console.log(err);
            });
    }; 
    return(
        <div>
            <h1>{taskview.task}</h1>
            <h2>{taskview.points}</h2>
            <Link to={"../submit/" + id}><button>The task has been done!</button></Link>
            <Link to={"../edit/" + id}><button>Edit this task!</button></Link>
            <Link to="../home"><button>Back to homepage</button></Link>
            <br />
            <button onClick={()=> deleteTask(taskview._id)}>Delete</button>
        </div>
    );
}

export default Taskview;