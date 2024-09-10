
import React from 'react';
import logo from '../images/AKCLogo.png'
import '../../styles/globals.css'

const Logo = () => {
    return (
        < div className="logo1 rounded">
            <a href='/'>
            <img src = {logo} alt = "CAK Banner" width={150} height={150} className="logo1 rounded" />
            </a>
        </div>
    );
};

export default Logo