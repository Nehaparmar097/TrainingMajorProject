import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './header.css';
import Signup from '../Pages/signup'
import App from '../App';
import mylogo from './zocdoc-removebg-preview.png';
import Login from '../Pages/login'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={mylogo} alt="Logo" className="logo" />
        <span className="brand-name">Zocdoc</span>
      </div>
      <nav className="header-nav">
        <Link to="#">Browse</Link>
        <Link to="#">Help</Link>
        <Link to="#">List your practice on Zocdoc</Link>
      </nav>
      <div className="header-right">
        <Link to="/Login" className="login">log in</Link> {/* Update to actual login path */}
        <Link to="/Signup" className="signup">Sign up</Link> {/* Use Link for signup */}
      </div>
    </header>
  );
};

export default Header;