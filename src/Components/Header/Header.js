import React from 'react';
import logo from '../../houser_logo.png';
import './header.css';

function Header(props) {
    return (
        <div className='page-header'>
            <img src={logo} alt='house logo' />
            <h1 className='header-title'>Houser</h1>
        </div>
    )
}

export default Header;