import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faTooth, faFemale, faBrain, faEye, faCapsules } from '@fortawesome/free-solid-svg-icons';
import './mid2.css';

const InsurancePlans = () => {
 

  const specialties = [
    { name: 'Primary Care', icon: faHeartbeat },
    { name: 'Dentist', icon: faTooth },
    { name: 'OB-GYN', icon: faFemale },
    { name: 'Dermatologist', icon: faCapsules },
    { name: 'Psychiatrist', icon: faBrain },
    { name: 'Eye Doctor', icon: faEye }
  ];

  return (
    <div className="container my-5">
     
      

      {/* Insurance Logos */}
    

      {/* Button to Add Insurance */}
    

      {/* Specialties Section */}
      <h3 className="my-4">Top-searched specialties</h3>
      <div className="d-flex justify-content-between">
        {specialties.map((specialty, index) => (
          <div key={index} className="specialty-box">
            <FontAwesomeIcon icon={specialty.icon} size="3x" />
            <p>{specialty.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancePlans;
