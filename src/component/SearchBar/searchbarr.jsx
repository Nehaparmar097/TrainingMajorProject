import React, { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import leftH from "../../assets/Hero/Left.png";
import rightH from "../../assets/Hero/Right.png";
import blink from "../../assets/Hero/Design.png";
import "./searchbarr.css";
import { FaSearch, FaMapMarkerAlt, FaRegAddressCard, FaChevronDown } from "react-icons/fa";

const Search = () => {
  const [specializations, setSpecializations] = useState([]);
  const [filteredSpecializations, setFilteredSpecializations] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [lazyLoadLimit, setLazyLoadLimit] = useState(10);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [insuranceDropdownVisible, setInsuranceDropdownVisible] = useState(false);
  const [insuranceOptions, setInsuranceOptions] = useState([]);
  const [filteredInsuranceOptions, setFilteredInsuranceOptions] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState("");

  const specializationDropdownRef = useRef(null);
  const insuranceDropdownRef = useRef(null);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const specRes = [
          "Primary Care Physician (PCP)",
          "OB-GYN (Obstetrician-Gynecologist)",
          "Dermatologist",
          "Dentist",
          "Eye Doctor",
          "Primary Care Physician (PCP)",
          "OB-GYN (Obstetrician-Gynecologist)",
          "Dermatologist",
          "Dentist",
          "Eye Doctor",
        ];
        setSpecializations(specRes);
        setFilteredSpecializations(specRes.slice(0, lazyLoadLimit));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [lazyLoadLimit]);

  
  useEffect(() => {
    const fetchInsuranceData = async () => {
      try {
        const insuranceRes = [
          "UnitedHealthcare",
          "Aetna",
          "Cigna",
          "Blue Cross Blue Shield",
          "Kaiser Permanente",
        ];
        setInsuranceOptions(insuranceRes);
        setFilteredInsuranceOptions(insuranceRes.slice(0, lazyLoadLimit));
      } catch (error) {
        console.error("Error fetching insurance data", error);
      }
    };
    fetchInsuranceData();
  }, [lazyLoadLimit]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleInsuranceDropdown = () => {
    setInsuranceDropdownVisible(!insuranceDropdownVisible);
  };

  
  const handleScroll = (e, isSpecialization) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (isSpecialization && lazyLoadLimit < specializations.length) {
        setLazyLoadLimit(lazyLoadLimit + 10);
      }
      if (!isSpecialization && lazyLoadLimit < insuranceOptions.length) {
        setLazyLoadLimit(lazyLoadLimit + 10);
      }
    }
  };

  const handleSpecializationClick = (specialization) => {
    setSelectedSpecialization(specialization);
    setDropdownVisible(false);
  };

  const handleInsuranceClick = (insurance) => {
    setSelectedInsurance(insurance);
    setInsuranceDropdownVisible(false);
  };

  
  const words = ["dentists", "doctors", "therapists", "specialists"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words.length]);
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        specializationDropdownRef.current &&
        !specializationDropdownRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
      if (
        insuranceDropdownRef.current &&
        !insuranceDropdownRef.current.contains(event.target)
      ) {
        setInsuranceDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="hero-section flex flex-col items-center overflow-hidden">
    
      <div className="hero-hand-left">
        <img src={leftH} alt="Left Hand" />
      </div>
      <div className="hero-hand-right">
        <img src={rightH} alt="Right Hand" />
      </div>

    
      <h1 className="hero-title">
        Book local{" "}
        <span className="word-change">{words[currentWordIndex]}</span> <br />{" "}
        who take your insurance
      </h1>

     
      <div className="hero-search-bar lg:flex gap-4 items-center">
       
        <div className="search-input relative">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={
              selectedSpecialization
                ? selectedSpecialization
                : "Condition, procedure, doctor..."
            }
            className="input-field"
            readOnly
            onClick={toggleDropdown}
          />

          {/* Specialization Dropdown */}
          {dropdownVisible && (
            <div
              className="specialization-dropdown dropdown-menu show"
              ref={specializationDropdownRef}
              onScroll={(e) => handleScroll(e, true)}
            >
              {filteredSpecializations.map((spec, idx) => (
                <a
                  key={idx}
                  className="dropdown-item"
                  onClick={() => handleSpecializationClick(spec)}
                >
                  {spec}
                </a>
              ))}
            </div>
          )}

         
          {dropdownVisible && (
            <button className="scroll-button" onClick={() => setLazyLoadLimit(lazyLoadLimit + 10)}>
              <FaChevronDown />
            </button>
          )}
        </div>

      
        <div className="location-input">
          <FaMapMarkerAlt className="location-icon" />
          <input
            type="text"
            placeholder="Bangalore, KA"
            className="input-field"
          />
        </div>

       
        <div className="insurance-input relative">
          <FaRegAddressCard className="insurance-icon" />
          <input
            type="text"
            placeholder={
              selectedInsurance ? selectedInsurance : "UnitedHealthcare - Add plan"
            }
            className="input-field"
            readOnly
            onClick={toggleInsuranceDropdown}
          />

         
          {insuranceDropdownVisible && (
            <div
              className="insurance-dropdown dropdown-menu show"
              ref={insuranceDropdownRef}
              onScroll={(e) => handleScroll(e, false)}
            >
              {filteredInsuranceOptions.map((insurance, idx) => (
                <a
                  key={idx}
                  className="dropdown-item"
                  onClick={() => handleInsuranceClick(insurance)}
                >
                  {insurance}
                </a>
              ))}
            </div>
          )}

        
          {insuranceDropdownVisible && (
            <button className="scroll-button" onClick={() => setLazyLoadLimit(lazyLoadLimit + 10)}>
              <FaChevronDown />
            </button>
          )}
        </div>

       
        <button className="search-button flex items-center justify-center">
          <FaSearch className="search-button-icon" />
          <img className="search-blink" src={blink} alt="Blink" />
        </button>
      </div>
    </section>
  );
};

export default Search;
