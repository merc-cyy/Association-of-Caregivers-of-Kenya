
import React from 'react';
import '../../styles/globals.css';
import Logo from '../Header/Logo';
import Navbar from '../Header/Navbar';
import photo1 from '../images/AKCWhatWeDo.png'
import photo2 from '../images/AKCMission.png';
import photo3 from '../images/AKCVision.png'
import photo4 from '../images/AKCPhoto4.png';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div>
        <div className="about-image">
            <div className='about-content'>
                <div className='content'>
                    <h1 className='content-title'>ABOUT US</h1>
                    <p className='content-paragraph'>The Association of Caregivers is dedicated to supporting and empowering those who care for others by enhancing the quality of caregiving and build a strong, supportive community.</p>
                </div>
            </div>
        </div>

        <div>
            <section className="mission-vision">

                <div className="mission-vision-item section-card">
                    <div className="mission-text">
                        <h2>What we Do</h2>
                        <p>
                        We offer a range of services including:
                        </p>
                        <ul>
                        <li>
                            <strong>Support Groups:</strong> We facilitate regular support groups where caregivers can connect with others who understand their challenges. 
                        </li>
                        <li>
                            <strong>Educational Resources:</strong> We provide a wealth of educational materials designed to empower caregivers with knowledge and skills. 
                        </li>
                        <li>
                            <strong>Counseling Services:</strong> Our professional counselors offer one-on-one and group counseling sessions to address the mental and emotional needs of caregivers. 
                        </li>
                        <li>
                            <strong>Advocacy and Outreach:</strong> We work actively to advocate for better policies and resources for caregivers through community outreach and public awareness campaigns.
                        </li>
                        </ul>

                    </div>
                    <img src={photo1} alt="Our Mission" className="mission-img" />
                </div>

                <div className="mission-vision-item section-card">
                    <div className="mission-text">
                        <h2>Our Mission</h2>
                        <p>
                        At the Association of Caregivers, our mission is to support, empower, and advocate for the caregivers who tirelessly dedicate themselves to the well-being of others. We are committed to providing resources, training, and a supportive community to enhance the lives of caregivers and those they care for. 
                        Our goal is to ensure that every caregiver receives the recognition, respect, and assistance they deserve.
                        </p>
                    </div>
                    <img src={photo2} alt="Our Mission" className="mission-img" />
                </div>

                <div className="mission-vision-item section-card">
                    <div className="vision-text">
                        <h2>Our Vision</h2>
                        <p>
                        We envision a world where caregivers are celebrated and valued for their vital role in society. By fostering a network of compassion and collaboration, we strive to elevate the standards of caregiving and drive positive change in the field. 
                        Our vision is to create a future where every caregiver has access to the tools, knowledge, and support needed to thrive both personally and professionally.
                        </p>
                    </div>
                    <img src={photo3} alt="Our Vision" className="vision-img" />
                </div>

                <div className="mission-vision-item section-card">
                    <div className="vision-text">
                        <h2>Join Us</h2>
                        <p>
                        Whether you are a professional caregiver, a family member providing care, or someone interested in supporting the caregiving community, we invite you to join us. 
                        Together, we can make a significant impact and ensure that caregivers receive the recognition and support they deserve
                        </p>
                        <Link to="/GetInvolved">
                            <button className="join-button">Connect</button>
                        </Link>
                    </div>
                    <img src={photo4} alt="Our Vision" className="vision-img" />
                </div>


            </section>
        </div>
    </div>

  );
};

export default AboutUs;