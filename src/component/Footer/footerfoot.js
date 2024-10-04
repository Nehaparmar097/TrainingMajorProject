// Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footerr = () => {
  return (
    <footer className="footer bg-dark text-light d-flex justify-content-between align-items-center p-2">
      <div className="footer-left d-flex align-items-center">
        <span>&copy; 2024 Zocdoc, Inc.</span>
        <a href="#" className="ml-3 text-light">Terms</a>
        <a href="#" className="ml-3 text-light">Privacy</a>
        <a href="#" className="ml-3 text-light">Consumer Health</a>
        <a href="#" className="ml-3 text-light">Your privacy choices</a>
      </div>

      <div className="footer-right d-flex align-items-center">
        <a href="#" className="text-light ml-3">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#" className="text-light ml-3">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="text-light ml-3">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="text-light ml-3">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footerr;
