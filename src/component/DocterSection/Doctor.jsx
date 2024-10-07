import React from 'react';
import './Doctor.css'; 
import DoctorImage from '../../assets/DoctorImage.png'; 

const PrivatePractice = () => {
  return (
    <section className="private-practice-section">
      <div className="content-wrapper">
      
        <div className="image-container">
          <img
            src={DoctorImage} 
            alt="Doctor"
            className="practice-image"
          />
        </div>

        <div className="text-container">
          <h3 className="subheading">Zocdoc for private practices</h3>
          <h1 className="main-heading">
            Are you a provider interested in reaching new patients?
          </h1>
          <ul className="benefits-list">
            <li>Reach patients in your area looking for a new provider</li>
            <li>Fill last-minute openings in your schedule</li>
            <li>Strengthen your online reputation with verified reviews</li>
          </ul>
          <button className="cta-button">List your practice on Zocdoc</button>
        </div>
      </div>
    </section>
  );
};

export default PrivatePractice;
