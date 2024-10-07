import React from 'react';
import './jobopening.css';
import dummyImage from '../assets/jobImage.png'; 

const JobOpening = () => {
  return (
    <section className="job-opening-section">
      <div className="job-content-wrapper">
        <div className="job-text-container">
          <h3 className="job-subheading">Zocdoc jobs</h3>
          <h1 className="job-main-heading">
            Join us, and help transform healthcare for everyone.
          </h1>
          <button className="job-cta-button">View job openings</button>
        </div>

        <div className="job-image-container">
          <img
            src={dummyImage} 
            alt="Cartoon doctor"
            className="job-image"
          />
        </div>
      </div>
    </section>
  );
};

export default JobOpening;
