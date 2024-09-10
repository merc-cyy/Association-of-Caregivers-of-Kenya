
import React from 'react';

import Blurb from './Blurb';
import Slideshow from './Slideshow';
import Header from '../Header/Header';
import ContactForm from './ContactForm';


import '../../styles/globals.css';


const Home = () => {
    return(
        <>  
        <Header />
        <Blurb />
        <Slideshow />
        <ContactForm />


        </>
    );
};

export default Home;