import React from "react";
import InsuranceImage from "../../assets/Insurance";
import './insurance.css'
const Insurance = () => {
  const insurances = InsuranceImage;
  
  return (
    <section className="insurance-section">
      <div className="insurance-container">
        <div className="mb-8">
          <h2 className="insurance-heading">
            Find an in-network doctor from over 1,000 insurance plans
          </h2>
          <p className="insurance-subtext">
            Add your insurance to see in-network primary care doctors
          </p>
        </div>

        <div className="insurance-grid">
          {insurances.map((insurance, index) => (
            <div key={index} className="insurance-item">
           <a href="/dummy">
        <button>
          <img
            src={insurance}
            alt="Insurance logo"
            className="insurance-logo"
          />
        </button>
      </a>
            </div>
          ))}
          <a href="/dummy" className="insurance-link">
            See all (1,000+)
          </a>
        </div>

        <button className="insurance-button">
          Add your insurance coverage
        </button>
      </div>
    </section>
  );
};

export default Insurance;
