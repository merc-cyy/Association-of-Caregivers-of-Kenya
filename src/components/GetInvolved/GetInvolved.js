
import React from 'react';
import '../../styles/globals.css';
import Card from './Card';

const GetInvolved = () => {
return( 
    <>
    <div className="join-us-image">
        <div className='about-content'>
            <div className='content'>
                <h1 className='content-title'>JOIN US!</h1>
                <p className='content-paragraph'>
                     Are you a caregiver? Or are you looking to find a community with support?Whether you are a professional caregiver, a family member, or someone passionate about caregiving, we invite you to become part of our community.
                </p>
            </div>
        </div>
    </div>

    <div className="card-container">
      <Card
        icon={<i className="bi bi-laptop-fill"></i>}
        title="Online Meetings"
        text="every last Saturday of the month from 7.30am – 9.30am.
         Members share on a chosen topic of interest and there may be a brief presentation on the same by an expert"
      />
      <Card
        icon={<i className="bi bi-people-fill"></i>}
        title="Physical Meetings"
        text="We were able to meet once each year in 2022 and 2023. 
         We hope to increase physical meetings to 2 per year starting in 2024"
      />
      <Card
        icon={<i className="bi bi-whatsapp"></i>}
        title="WhatsApp"
        text="members are free to ask for, and share, information in the WhatsApp group so long as it relates to caregiving. 
        This information includes where to purchase products needed by our care-receivers, referrals to specialist doctors, sharing experiences on how to handle certain caregiving situations etc."
      />
      <Card
        icon={<i className="bi bi-chat-heart"></i>}
        title="Community"
        text="On our WhatsApp platform, members find a safe space to share their frustrations, fears, sorrows, confusion and all manner of challenges that a family caregiver goes through. 
        There is always an outpouring of encouragement, love and support for anyone going through something difficult and this keeps us going."
      />
      <Card
        icon={<i className="bi bi-cake2-fill"></i>}
        title="Celebrating each other"
        text="We celebrate when our care-receivers make some progress in something, we celebrate when we do something for our self-care like go on a coffee date, do our hair or take a day/few hours off (these are big achievements for us caregivers!)
"
      />
      </div>


    </>

);
};

export default GetInvolved;