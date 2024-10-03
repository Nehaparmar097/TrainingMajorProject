import React, { useState } from 'react';
import './mid1.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const insuranceData = [
  { name: 'Aetna', logoClass: 'fa-heart', details: 'Aetna offers health insurance plans for individuals and businesses.' },
  { name: 'Cigna', logoClass: 'fa-tree', details: 'Cigna offers health, dental, disability, and life insurance.' },
  { name: 'United Healthcare', logoClass: 'fa-hospital', details: 'UnitedHealthcare provides comprehensive health insurance plans.' },
  { name: 'Medicare', logoClass: 'fa-hand-holding-medical', details: 'Medicare is a national health insurance program in the US.' },
  { name: 'BlueCross BlueShield', logoClass: 'fa-shield-alt', details: 'BlueCross BlueShield offers health insurance across the US.' },
];

const InsuranceTile = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="card-content">
            <i className={`fas ${item.logoClass} fa-3x`} style={{ color: '#333' }}></i>
            <p>{item.name}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <p>{item.details}</p>
        </div>
      </div>
    </div>
  );
};

const Mid1 = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
        Find an in-network doctor from over 1,000 insurance plans
      </h2>
      <p className="text-center text-muted">Add your insurance to see in-network primary care doctors</p>

      <div className="row">
        {insuranceData.map((item, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <InsuranceTile item={item} />
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-dark">Add your insurance coverage</button>
      </div>
    </div>
  );
};

export default Mid1;
