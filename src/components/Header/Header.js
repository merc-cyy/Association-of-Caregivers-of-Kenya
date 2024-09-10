
import React from 'react';

import '../../styles/globals.css';

const Header = () => {
  return (
    <header className=" bg-primary p-3 ">
   
        {/* <MiniHeader /> */}
        <div className="header-image">
            <div className='about-content'>
                <div className='content'>
                    <h1 id='home-title' className='content-title'>CAREGIVERS ASSOCIATION OF KENYA</h1>
                    <p id='home-title-text' className='content-paragraph'>We take care of those who take care of our loved ones.</p>
                </div>
            </div>
        </div>

    </header>
  );
};

export default Header;


