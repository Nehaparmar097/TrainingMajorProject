import React from "react";
import SpecialityImage from "../assets/Speciality";
import "./speciality.css"
const specialties = SpecialityImage;

const Speciality = () => {
  return (
    <section className="speciality-section">
      <div className="speciality-container">
        <h2 className="speciality-heading">
          Top-searched specialties
        </h2>

        <div className="speciality-grid">
          {specialties.map((specialty, index) => (
            <div className="speciality-item" key={index}>
              <div className="speciality-card">
                <div className="speciality-image-container">
                   <a href="/dummy">
                   <button>
                  <img
                    src={specialty.imgSrc}
                    alt={specialty.name}
                    className="speciality-image"
                  />
                  </button>
                  </a>
                </div>
                <p className="speciality-name">{specialty.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
