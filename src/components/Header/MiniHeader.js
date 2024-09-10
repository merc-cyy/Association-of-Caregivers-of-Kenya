
import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import '../../styles/globals.css';

const MiniHeader = () =>{

        return(
            <div className="container1">
                <Logo />  
                {/* NAVIGATION BAR*/}
                <Navbar /> 
            </div>
        );
};

export default MiniHeader;
