import React, { useState, useEffect, useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from "axios";
import "./searchbar.css"; // Assuming you have the appropriate CSS for styling

const SearchBar = () => {
  const [specializations, setSpecializations] = useState([]);
  const [filteredSpecializations, setFilteredSpecializations] = useState([]);
  const [filteredInsurance, setFilteredInsurance] = useState([]);
  const [specializationText, setSpecializationText] = useState("OB-GYN");
  const [insuranceText, setInsuranceText] = useState("we-GYNs");
  const [location, setLocation] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedInsurance, setSelectedInsurance] = useState("");
  const [lazyLoadLimit, setLazyLoadLimit] = useState(10); // Initial lazy load limit
  const [insuranceLazyLoadLimit, setInsuranceLazyLoadLimit] = useState(10); // Initial lazy load limit for insurance
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [insuranceDropdownVisible, setInsuranceDropdownVisible] = useState(false);
  
  const specializationDropdownRef = useRef(null); // Reference to specialization dropdown
  const insuranceDropdownRef = useRef(null); // Reference to insurance dropdown

  // Fetch specializations and insurance data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const specRes = 
        [
            "Primary Care Physician (PCP)",
            "OB-GYN (Obstetrician-Gynecologist)",
            "Dermatologist",
            "Dentist",
            "Ear, Nose & Throat Doctor (ENT / Otolaryngologist)",
            "Eye Doctor",
            "Psychiatrist",
            "Orthopedic Surgeon (Orthopedist)",
            "Acupuncturist",
            "Allergist (Immunologist)",
            "Audiologist",
            "Cardiologist (Heart Doctor)",
            "Cardiothoracic Surgeon",
            "Chiropractor",
            "Colorectal Surgeon",
            "Dietitian / Nutritionist",
            "Endocrinologist (incl Diabetes Specialists)",
            "Gastroenterologist",
            "Geriatrician",
            "Hearing Specialist",
            "Hematologist (Blood Specialist)",
            "Infectious Disease Specialist",
            "Infertility Specialist",
            "Midwife",
            "Naturopathic Doctor",
            "Nephrologist (Kidney Specialist)",
            "Neurologist (incl Headache Specialists)",
            "Neurosurgeon",
            "Oncologist",
            "Ophthalmologist",
            "Optometrist",
            "Oral Surgeon",
            "Orthodontist",
            "Pain Management Specialist",
            "Pediatric Dentist",
            "Pediatrician",
            "Physiatrist (Physical Medicine)",
            "Physical Therapist",
            "Plastic Surgeon",
            "Podiatrist (Foot and Ankle Specialist)",
            "Prosthodontist",
            "Psychologist",
            "Pulmonologist (Lung Doctor)",
            "Radiologist",
            "Rheumatologist",
            "Sleep Medicine Specialist",
            "Sports Medicine Specialist",
            "Surgeon",
            "Therapist / Counselor",
            "Urgent Care Specialist",
            "Urological Surgeon",
            "Urologist",
            "Vascular Surgeon",
            "Endodontist",
            "Periodontist"
        ]
        ;
        setSpecializations(specRes);
        setFilteredSpecializations(specRes.slice(0, lazyLoadLimit)); // Initial lazy load

        const insuranceCompanies = [
            "AARP",
            "ACE",
            "AIG",
            "APWU",
            "ATRIO Health Plans",
            "AVMA Life",
            "Absolute Total Care",
            "Access Medicare (NY)",
            "Accountable Health Plan of Ohio",
            "Advanced Health",
            "AdvantageMD",
            "Advantica",
            "Advent Health",
            "Adventist Health",
            "Advocate Health Care",
            "Aetna",
            "Aetna Better Health",
            "Affinity Health Plan",
            "AgeRight Advantage",
            "AgeWell New York",
            "Agile Health Insurance",
            "Alameda Alliance for Health",
            "Aliera Health Care",
            "Alignment Health Plan",
            "All Savers Insurance",
            "AllCare Health",
            "AllState",
            "Allegiance Life and Health",
            "Alliant Health Plans",
            "Allianz Worldwide Care",
            "Allwell",
            "AlohaCare",
            "AlphaCare",
            "AltaMed Senior BuenaCare (PACE)",
            "Alterwood Advantage",
            "Altius (Coventry Health Care)",
            "AlwaysCare",
            "Ambetter",
            "AmeriGroup",
            "AmeriHealth",
            "AmeriHealth Caritas",
            "America's 1st Choice",
            "American Behavioral",
            "American Eldercare",
            "American Healthcare Alliance",
            "American Maritime Officers Plans",
            "American Republic Insurance Company",
            "Amida Care",
            "Amita Health",
            "Amplifon Hearing Health Care",
            "Anthem Blue Cross",
            "Anthem Blue Cross Blue Shield",
            "Apostrophe",
            "ArchCare",
            "Arise Health Plan",
            "Arizona Complete Health",
            "Arizona Foundation for Medical Care",
            "Arkansas Blue Cross Blue Shield",
            "Arkansas Total Care",
            "Ascension Complete",
            "Ascension Health",
            "Aspire Health Plan",
            "Assurant Employee Benefits",
            "Assurant Health",
            "Asuris Northwest Health",
            "Aultcare",
            "AvMed",
            "Avera Health Plans",
            "Avesis",
            "BMC HealthNet Plan",
            "Banker's Life",
            "Banner Health",
            "Baptist Health Plan",
            "BayCarePlus Medicare Advantage",
            "Baylor Scott & White Health Plan",
            "Beacon Health Options",
            "Beaumont Employee Health Plan",
            "Beech Street",
            "Best Choice Plus",
            "Best Doctors Insurance",
            "Best Life And Health",
            "Better Health (Florida Medicaid)",
            "Blue Choice Health Plan",
            "Blue Cross Blue Shield",
            "Blue Cross Blue Shield Federal Employee Program",
            "Blue Cross Blue Shield of Alabama",
            "Blue Cross Blue Shield of Arizona",
            "Blue Cross Blue Shield of Georgia",
            "Blue Cross Blue Shield of Illinois",
            "Blue Cross Blue Shield of Kansas",
            "Blue Cross Blue Shield of Kansas City",
            "Blue Cross Blue Shield of Louisiana",
            "Blue Cross Blue Shield of Massachusetts",
            "Blue Cross Blue Shield of Michigan",
            "Blue Cross Blue Shield of Minnesota",
            "Blue Cross Blue Shield of Mississippi",
            "Blue Cross Blue Shield of Montana",
            "Blue Cross Blue Shield of Nebraska",
            "Blue Cross Blue Shield of New Mexico",
            "Blue Cross Blue Shield of North Carolina",
            "Blue Cross Blue Shield of North Dakota",
            "Blue Cross Blue Shield of Oklahoma",
            "Blue Cross Blue Shield of Rhode Island",
            "Blue Cross Blue Shield of South Carolina",
            "Blue Cross Blue Shield of Tennessee",
            "Blue Cross Blue Shield of Texas",
            "Blue Cross Blue Shield of Vermont",
            "Blue Cross Blue Shield of Wyoming",
            "Blue Cross of Idaho",
            "Blue Cross of Northeastern Pennsylvania",
            "Blue Shield of California",
            "Blue Shield of Northeastern New York",
            "Brand New Day",
            "Braven Health (Horizon Blue Cross Blue Shield of New Jersey)",
            "BridgeSpan",
            "Bridgeway Health Solutions",
            "Bright Health",
            "Buckeye Health Plan",
            "CBA Blue",
            "CDPHP",
            "CHAMPVA",
            "CHP Group",
            "CHRISTUS Health Plan",
            "CalOptima",
            "CalPERS",
            "CalViva Health",
            "California Foundation for Medical Care",
            "California Health and Wellness",
            "Calvos",
            "Cambridge Health Alliance (CHA)",
            "Capital Blue Cross",
            "Capital Health Plan",
            "Care Improvement Plus",
            "Care N' Care",
            "Care1st",
            "CareConnect",
            "CareFirst Blue Cross Blue Shield (Health)",
            "CareMore",
            "CareOregon",
            "CarePartners of Connecticut",
            "CarePlus Health Plans (Florida Medicare)",
            "CareSource",
            "Cascade Health Alliance",
            "Caterpillar",
            "CeltiCare Health Plan",
            "CenCal Health",
            "Cenpatico",
            "Centennial Care",
            "Center for Elders' Independence (PACE)",
            "CenterLight Healthcare",
            "Centers Plan for Healthy Living",
            "Centivo",
            "Centra Health",
            "Central California Alliance for Health",
            "Central Health Plan of California",
            "Century Healthcare - CHC",
            "Children's Community Health Plan",
            "Children's Medical Center Health Plan",
            "Children's Medical Services (CMS)",
            "Chinese Community Health Plan",
            "Choice Care Network",
            "Christian Healthcare Ministries",
            "Cigna",
            "Cigna-HealthSpring",
            "Clarion Health",
            "Clark County Self-Funded Health",
            "Clear Spring Health",
            "Clements Worldwide",
            "Cleveland Clinic Employee Health Plan",
            "Clover Health",
            "Cofinity",
            "Colorado Access",
            "Columbia Pacific CCO",
            "Columbia United Providers",
            "ComPsych",
            "Common Ground Healthcare Cooperative",
            "Commonwealth Care Alliance",
            "Community Behavioral Health",
            "Community Care Alliance of Illinois",
            "Community Care Associates",
            "Community Care Behavioral Health Organization",
            "Community Care Plan",
            "Community Care of North Carolina",
            "Community Eye Care",
            "Community First Health Plans",
            "Community Health Choice",
            "Community Health Group",
            "Community Health Options",
            "Community Health Partners",
            "Community Health Plan of Washington",
            "CommunityCare of Oklahoma",
            "CompBenefits",
            "Companion Life",
            "Comprehensive Health Insurance Plan (CHIP) of Illinois",
            "Comprehensive Medical and Dental Program (CMDP)",
            "Connect Care",
            "ConnectiCare",
            "Consolidated Health Plans",
            "Constitution Life",
            "Consumer Health Network",
            "Contra Costa Health Plan",
            "Cook Children's Health Plan",
            "Coordinated Care Health",
            "Corvel",
            "CountyCare (Cook County)",
            "Coventry Health Care",
            "Cox HealthPlans",
            "Create",
            "Crystal Run Health Plans",
            "Culinary Health Fund",
            "CuraLinc Healthcare",
            "Curative",
            "DC Medicaid",
            "DMC Care",
            "DOCS (Doctors of the Oregon South Coast)",
            "DavidShield",
            "Davis Vision",
            "Deaconess Health Plans",
            "Dean Health Plan",
            "Dell Children's Health Plan",
            "Denver Health Medical Plan",
            "Department of Medical Assistance Services",
            "Deseret Mutual",
            "Devon Health Services",
            "Devoted Health",
            "Dimension Health",
            "Doctors HealthCare Plans",
            "Driscoll Health Plan",
            "EHP Significa",
            "EMI Health",
            "ESSENCE Healthcare",
            "Eastern Oregon Coordinated Care Organization",
            "Easy Choice Health Plan (California)",
            "Easy Choice Health Plan of New York",
            "El Paso First Health Plans",
            "Elderplan",
            "EmblemHealth",
            "EmblemHealth (formerly known as GHI)",
            "EmblemHealth (formerly known as HIP)",
            "Emory Health Care Plan",
            "Empire Blue Cross Blue Shield (Health)",
            "Empire BlueCross BlueShield HealthPlus",
            "Empire Plan",
            "Empower Healthcare Solutions",
            "Encore Health Network",
            "Envolve Benefit Options",
            "Eon Health",
            "Epic Hearing Health Care",
            "Erickson Advantage",
            "EverCare",
            "Evergreen Health Cooperative",
            "Evolutions Healthcare Systems",
            "Excellus Blue Cross Blue Shield",
            "Experience HealthND",
            "Extended Managed Long Term Care",
            "EyeMed",
            "Eyetopia Vision Care",
            "Fallon Community Health Plan (FCHP)",
            "Family Health Network",
            "FamilyCare Health Plans",
            "Fidelis Care (NY)",
            "Firefly Health",
            "First Choice Health",
            "First Choice Health Plan of Mississippi",
            "First Health (Coventry Health Care)",
            "FirstCare Health Plans",
            "FirstCarolinaCare",
            "Florida Blue: Blue Cross Blue Shield of Florida",
            "Florida Community Care",
            "Florida Health Care Plans",
            "Florida Health Partners",
            "Florida Hospital Healthcare System (FHHS)",
            "Florida KidCare",
            "Fort Bend County Indigent Health Care",
            "Fortified Provider Network",
            "Freedom Health",
            "Fresenius Health Plans",
            "Friday Health Plans",
            "Fringe Benefit Group",
            "Futures In Education",
            "GHP Family",
            "Geisinger Health Plan",
            "Gilsbar",
            "GlobalHealth",
            "Golden Rule Insurance Company",
            "Good Samaritan Health Plan",
            "Goshen Health",
            "Grand Valley Health Plan",
            "Grange",
            "Gravie"
          ];

        setFilteredInsurance(insuranceCompanies.slice(0, insuranceLazyLoadLimit)); // Initial lazy load for insurance

      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [lazyLoadLimit, insuranceLazyLoadLimit]);

  // Dynamic specialization text every 3 seconds
  useEffect(() => {
    const specializationOptions = ["Primary Care Physician", "OB-GYN", "Dermatologist", "Dentist"];
    let currentIndex = 0;
    const interval = setInterval(() => {
      setSpecializationText(specializationOptions[currentIndex]);
      currentIndex = (currentIndex + 1) % specializationOptions.length;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Toggle dropdown visibility on click
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleInsuranceDropdown = () => {
    setInsuranceDropdownVisible(!insuranceDropdownVisible);
  };

  // Load more items when scrolled to the bottom of the dropdown
  const handleScroll = (e, type) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (type === "specialization" && lazyLoadLimit < specializations.length) {
        setLazyLoadLimit(lazyLoadLimit + 10);
      } else if (type === "insurance" && insuranceLazyLoadLimit < filteredInsurance.length) {
        setInsuranceLazyLoadLimit(insuranceLazyLoadLimit + 10);
      }
    }
  };

  const handleSpecializationClick = (specialization) => {
    setSelectedSpecialization(specialization);
    setDropdownVisible(false); // Close the dropdown after selection
  };

  const handleInsuranceClick = (insurance) => {
    setSelectedInsurance(insurance);
    setInsuranceDropdownVisible(false); // Close the dropdown after selection
  };

  return (
    <div className="search-container">
      <h1 id="dynamic-text">
        Book local <span id="specialization">{specializationText}</span> who take your insurance
      </h1>
      <div className="search-bar">
        {/* Specialization Input with Dropdown */}
        <div className="dropdown specialization-dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="specializationDropdown"
            aria-haspopup="true"
            aria-expanded={dropdownVisible}
            onClick={toggleDropdown}
          >
            {selectedSpecialization || "Choose Specialization"}
          </button>
          {dropdownVisible && (
            <div
              className="dropdown-menu show"
              aria-labelledby="specializationDropdown"
              onScroll={(e) => handleScroll(e, "specialization")}
              ref={specializationDropdownRef}
            >
              {filteredSpecializations.map((spec, idx) => (
                <a key={idx} className="dropdown-item" onClick={() => handleSpecializationClick(spec)}>
                  {spec}
                </a>
              ))}
            </div>
          )}
        </div>
        
        {/* Location Input */}
        
        <input className="btn btn-secondary dropdown-toggle"
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* Insurance Input with Dropdown */}
        <div className="dropdown insurance-dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="insuranceDropdown"
            aria-haspopup="true"
            aria-expanded={insuranceDropdownVisible}
            onClick={toggleInsuranceDropdown}
          >
            {selectedInsurance || "Choose Insurance"}
          </button>
          {insuranceDropdownVisible && (
            <div
              className="dropdown-menu show"
              aria-labelledby="insuranceDropdown"
              onScroll={(e) => handleScroll(e, "insurance")}
              ref={insuranceDropdownRef}
            >
              {filteredInsurance.map((ins, idx) => (
                <a key={idx} className="dropdown-item" onClick={() => handleInsuranceClick(ins)}>
                  {ins}
                </a>
              ))}
            </div>
          )}
        </div>
        
        {/* Search Button */}
        <button id="searchButton" className="btn">
  <i className="bi bi-search"></i> {/* Use the Bootstrap search icon */}
</button>

      </div>
    </div>
  );
};

export default SearchBar;
