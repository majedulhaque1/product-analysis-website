import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='logo'>
                <h2>Amazing Watch</h2>
            </div>
            <nav className='navbar'>
                <ul className='nav-items'>
                    <NavLink className='link' to={'/'}>Home</NavLink>
                    <NavLink className='link' to={'/reviews'}>Reviews</NavLink>
                    <NavLink className='link' to={'/dashboard'}>Dashboard</NavLink>
                    <NavLink className='link' to={'/blogs'}>Blogs</NavLink>
                    <NavLink className='link' to={'/about'}>About</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;