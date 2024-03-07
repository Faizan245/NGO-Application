// Form.js

import React, { useState } from 'react';
import '../CSS/recipient.css';


const Recipient = () => {
  const user_id = localStorage.getItem('userId');
  const memberName = localStorage.getItem('username');
  const [formData, setFormData] = useState({
    member_id: user_id,
    memberName: memberName,
    fullName: '',
    fatherName: '',
    date: '',
    amountInWords: '',
    amountInFigures: '',
    city: '',
    state:'',
    phone: '',
    reason:'',
    modeOfTransfer:''
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
      
      const response = await fetch('http://localhost:5000/add-recipient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Form data submitted successfully!');
        console.log(formData);
        
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
    <div className="form-containerD">
      <h2>Form</h2>
      <form onSubmit={handleSubmit} key={formData.id}>
        <div className="form-group">
          <label htmlFor="memberName">Member Name:</label>
          <input type="text" id="membeName" name="memberName" value={formData.memberName} onChange={handleChange} disabled/>
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="fatherName">Father's Name:</label>
          <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="amountInWords">Amount in Words:</label>
          <input type="text" id="amountInWords" name="amountInWords" spellCheck="true" value={formData.amountInWords} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="amountInFigures">Amount in Figures:</label>
          <input type="number" id="amountInFigures" name="amountInFigures" value={formData.amountInFigures} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="state">State :</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <input type="text" id="reason" name="reason" value={formData.reason} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          {phoneError && <span className="error">{phoneError}</span>}
          <small>Format: 1234567890</small>
        </div>
        <div className="form-group">
          <label>Mode of Transfer:</label>
          <select name="modeOfTransfer" value={formData.modeOfTransfer} onChange={handleChange} required={true}>
            <option value='none'>Select</option>
            <option value="bank">Bank transfer</option>
            <option value="upi">UPI</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        <button className='btn' type="submit">Donate {formData.amountInFigures}</button>
      </form>
    </div>
  );
}

export default Recipient;
