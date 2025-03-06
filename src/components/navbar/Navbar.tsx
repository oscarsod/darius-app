import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.module.scss'

const Navbar: React.FC = () => {
    return (
        <nav>
            <img src="/images/logo.png" alt="" />
            <ul>
                <li className='nav-link-text'><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
