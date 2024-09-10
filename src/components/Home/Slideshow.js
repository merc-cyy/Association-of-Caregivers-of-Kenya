
import React from 'react';
import '../../styles/globals.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


import image1 from '../images/AKCPic3.png';
import image2 from '../images/AKCPic2.png';
import image3 from '../images/AKCPhoto4.png';


const slides = [
  {
    name: "Discover",
    path: "/",
    image: image1,
    text: '"Caregiving is a profound expression of love and compassion. It reflects the depth of our humanity and our commitment to supporting one another."'
  },

  {
    name: "Learn more",
    path: "/resources",
    image: image2,
    text: '"Learn more about caregiving and its vital role in enhancing the quality of life. Discover how caregivers provide essential support and compassion, making a significant difference in the lives they touch."'
  },
  {
    name: "Connect",
    path: "/GetInvolved",
    image: image3,
    text: '"Join our community to receive valuable support and resources as a caregiver. Connect with others who share your experiences and gain access to tools that can help you in your caregiving journey."'
  }
];

const Slideshow = () =>
{
    const settings = {
                        dots: true,
        
                        accessibility: true,
                        swipe: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true, // Enable auto-scrolling
                        autoplaySpeed: 1500,};

    return (
        <div >
        <Slider {...settings}>
            {slides.map((slide, index) => (

                <div key={index} className="slide">
                    <img src={slide.image} alt={`Slide ${index + 1}`} />
                    <div >
                        <p className="slide-text">{slide.text}</p>
                        <Link to={slide.path}>
                            <button className=" slide-text slide-button">{slide.name}</button>
                        </Link>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
            );
};


export default Slideshow;