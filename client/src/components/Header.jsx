import React from 'react';
import "../styling/Header.css"
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className='header'>
            <p>Point Tracker v1</p>
            <p><Link to="Pointtracker/home">Cheat Link</Link></p>
        </div>
    );
}

export default Header;