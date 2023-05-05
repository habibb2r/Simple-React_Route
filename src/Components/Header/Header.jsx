import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Job Cracker</h2>
            <div className='links-container'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="applied">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button>Get Started</button>
        </div>
    );
};

export default Header;