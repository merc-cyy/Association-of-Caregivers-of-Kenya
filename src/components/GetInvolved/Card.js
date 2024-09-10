
import React from 'react';
import '../../styles/globals.css'

const Card = ({ icon, title, text }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;