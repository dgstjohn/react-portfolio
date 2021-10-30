import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">About Me</Link>
                </li>
                <li>
                    <Link to="/portfolio">My Projects</Link>
                </li>
                <li>
                    <Link to="/resume">My Resume</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;