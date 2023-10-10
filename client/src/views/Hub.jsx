import React from 'react';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import NoLogin from '../components/NoLogin';
import LoginPage from '../components/LoginPage';
import Signup from '../components/Signup';
import Homepage from '../components/Homepage';
import Createtask from '../components/Createtask';
import Submittask from '../components/Submittask';
import Taskview from '../components/Taskview';
import TaskEdit from '../components/Taskedit';

const Hub = (props) => {
    const [total, setTotal] = useState([])

    return(
    <Routes>

        <Route path="/" element={<NoLogin/>} />

        <Route path="/sdfs" element={<LoginPage/>} />

        <Route path="/sdfs" element={<Signup/>} />

        <Route path="/home" element={<Homepage total = {total} setTotal= {setTotal}/>} />
        <Route path="/create" element={<Createtask/>} />
        <Route path="/:id" element={<Taskview/>} />
        <Route path="/submit/:id" element={<Submittask/>} />
        <Route path="/edit/:id" element={<TaskEdit/>} />
        <Route path="/*" element="This page is inaccessible by normal means"/>

    </Routes>
    );
}

export default Hub;