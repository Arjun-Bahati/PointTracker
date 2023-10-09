import React from 'react';
import {Routes, Route} from "react-router-dom";
import Mainpage from '../components/Mainpage';

const Hub = (props) => {
    return(
    <Routes>

        <Route path="/" element={<Mainpage/>} />

        <Route path="/*" element="This page is inaccessible by normal means"/>

    </Routes>
    );
}

export default Hub;