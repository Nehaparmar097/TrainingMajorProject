import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <ul>
                        <li>Home</li>
                        <li>Press</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Discover</h4>
                    <ul>
                        <li>The Paper Gown</li>
                        <li>Stories for and about patients</li>
                        <li>Practice Resources for providers</li>
                        <li>Community Standards</li>
                        <li>Data and Privacy</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Insurance Carriers</h4>
                    <ul>
                        <li>Aetna</li>
                        <li>Cigna</li>
                        <li>UnitedHealthcare</li>
                        <li>And more...</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Top Specialties</h4>
                    <ul>
                        <li>Primary Care Doctor</li>
                        <li>Urgent Care</li>
                        <li>Dentist</li>
                        <li>Psychiatrist</li>
                        <li>And more...</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>The content provided here and elsewhere on the Zocdoc site or mobile app is provided for general informational purposes only. It is not intended as medical advice. Always contact your healthcare provider directly with any questions you may have regarding your health.</p>
                <p>© 2024 Zocdoc, Inc. | Terms | Privacy | Consumer Health | Site map</p>
            </div>
        </footer>
    );
};

export default Footer;
