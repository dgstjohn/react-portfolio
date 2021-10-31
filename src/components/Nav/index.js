import React from "react";
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeStyle={{ borderBottom:'3px solid #d9dcd6', padding: '0 10px 5px 10px' }} to="/">About Me</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ borderBottom:'3px solid #d9dcd6', padding: '0 10px 5px 10px' }} to="/portfolio">My Projects</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ borderBottom:'3px solid #d9dcd6', padding: '0 10px 5px 10px' }} to="/resume">My Resume</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ borderBottom:'3px solid #d9dcd6', padding: '0 10px 5px 10px' }} to="/contact">Contact Me</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;