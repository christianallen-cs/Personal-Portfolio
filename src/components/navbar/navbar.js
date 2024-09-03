import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href='/'>&lt;HOME/&gt;</a>
                    </li>
                    <li>
                        <a href='/'>&lt;SKILLS/&gt;</a>
                    </li>
                    <li>
                        <a href='/'>&lt;PROJECTS/&gt;</a>
                    </li>
                    <li>
                        <a href='/'>&lt;ABOUT ME/&gt;</a>
                    </li>
                    <li>
                        <a href='/'>&lt;CONTACT/&gt;</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;