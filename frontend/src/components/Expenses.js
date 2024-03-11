// Form.js

import React, { useState } from 'react';
import { REACT_APP_BACKEND_URL as api} from '../config'


const Expenses = () => {

  const user_id = localStorage.getItem('userId');
  const memberName = localStorage.getItem('username');

  const [formData, setFormData] = useState({
    member_id: user_id,
    memberName: memberName,
    expense: '',
    expAmount: '',
    currency:'',
    description: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {

      const response = await fetch(api + '/add-expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully!');
        console.log(formData);
        alert('expense added successfully');
        setFormData({
          member_id: user_id,
          memberName: memberName,
          expense: '',
          expAmount: '',
          currency:'',
          description: ''
        })

        // You can add additional logic here if needed, such as showing a success message to the user
      } else {
        console.log(formData);
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
          <input type="text" id="memberName" name="memberName" value={formData.memberName} onChange={handleChange} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="expense">Expense type:</label>
          <input type="text" id="expense" name="expense" value={formData.expense} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Choose Currency:</label>
          <select name="currency" value={formData.currency} onChange={handleChange} required={true}>
            <option value='none'>Select</option>
            <option value="Rupee">INR</option>
            <option value="Dinar">KD</option>
            <option value="SaudiRiyal">SAR</option>
            <option value="QatarRiyal">QAR</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="expAmount">Expense Amount:</label>
          <input type="number" id="expAmount" name="expAmount" value={formData.expAmount} onChange={handleChange} />
          <input type='text' value={formData.currency}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Expense Description:</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>

        <button className='btn' type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default Expenses;