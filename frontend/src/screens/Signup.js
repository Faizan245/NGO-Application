// Form.js

import React, { useState } from 'react';
import "../CSS/signup.css"



const Signup = () => {
  const [formData, setFormData] = useState({
    fullname:'',
    username: '',
    phone: '',
    password: '',
    zone_id: '',
    role: '',
  });
  const [phoneError, setPhoneError] = useState('');


  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'phone') {
      if (value.length !== 10) {
        setPhoneError('Phone number must be 10 digits long');
      } else {
        setPhoneError('');
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneError) {
      return;
    }

    try {
      console.log(formData);
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully!');
        let data = await response.json();
        if (data.success) {
          window.location = "/login";
        } else {
          alert(data.message);

        }




        // You can add additional logic here if needed, such as showing a success message to the user
      } else {
        console.error('Failed to submit form data');

        // Handle error scenarios here, such as displaying an error message to the user

      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle network errors or other exceptions here
    }
  };

  return (
    <div className="form-containerS">
      <h2>Form</h2>
      <form onSubmit={handleSubmit} key={formData.id}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Mobile:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Zone:</label>
          <select name="zone_id" value={formData.zone_id} onChange={handleChange}>
            <option value='select'>Select</option>
            <option value="india">India</option>
            <option value="kuwait">Kuwait</option>
            <option value="qatar">Qatar</option>
          </select>
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
          <option value='select'>Select</option>
            <option value="Member">Member</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button type="submit">Sign Up</button>
        <a href='/login'>Aready a user?</a>
      </form>
    </div>
  );
}

export default Signup;
