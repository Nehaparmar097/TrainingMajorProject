import React from 'react';
import './signup.css';

const SignupForm = () => {
  return (
    <div className="signup-container">
      <h2>Create an account</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Email" />

        <div className="name-fields">
          <div>
            <label>Legal first name</label>
            <input type="text" placeholder="Legal first name" />
          </div>
          <div>
            <label>Legal last name</label>
            <input type="text" placeholder="Legal last name" />
          </div>
        </div>

        <label>Date of birth</label>
        <input type="text" placeholder="dd/mm/yyyy" />

        <label>Sex</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="sex" value="Male" /> Male
          </label>
          <label>
            <input type="radio" name="sex" value="Female" /> Female
          </label>
        </div>

        <div className="additional-info">
          <a href="#">Add more sex & gender info</a> (optional)
        </div>

        <button className="continue-btn" type="submit">Continue</button>
      </form>
    </div>
  );
};

export default SignupForm;
