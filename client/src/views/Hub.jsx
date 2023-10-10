import React from 'react';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import NoLogin from '../components/NoLogin';
import Register from '../components/Register';
import Homepage from '../components/Homepage';
import Createtask from '../components/Createtask';
import Submittask from '../components/Submittask';
import Taskview from '../components/Taskview';
import TaskEdit from '../components/Taskedit';

const Hub = (props) => {
    const [total, setTotal] = useState([])
    const placeholderID = "65251240da7adb287e979af5"

    return(
    <div>
    <Routes>
        <Route path="/" element={<NoLogin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Homepage total = {total} setTotal= {setTotal}/>} />
        <Route path="/create" element={<Createtask/>}/>
        <Route path="/:id" element={<Taskview/>} />
        <Route path="/submit/:id" element={<Submittask placeholderID = {placeholderID}/>} />
        <Route path="/edit/:id" element={<TaskEdit/>} />
        <Route path="/*" element="This page is inaccessible by normal means"/>

    </Routes>
    </div>
    );
}

export default Hub;