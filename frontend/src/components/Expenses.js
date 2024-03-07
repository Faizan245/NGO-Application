// Form.js

import React, { useState } from 'react';



const Expenses = () => {

  const user_id = localStorage.getItem('userId');
  const memberName = localStorage.getItem('username');

  const [formData, setFormData] = useState({
    member_id: user_id,
    memberName: memberName,
    expense: '',
    expAmount: '', 
    description:''
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
      
      const response = await fetch('https://ngo-application-z8ni.vercel.app/add-expenses', {
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
    <div className="form-containerEX">
      <h2>Form</h2>
      <form onSubmit={handleSubmit} key={formData.id}>
        <div className="form-group">
          <label htmlFor="memberName">Member Name:</label>
          <input type="text" id="memberName" name="memberName" value={formData.memberName} onChange={handleChange} disabled/>
        </div>
        <div className="form-group">
          <label htmlFor="expense">Expense type:</label>
          <input type="text" id="expense" name="expense" value={formData.expense} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="expAmount">Expense Amount:</label>
          <input type="number" id="expAmount" name="expAmount" value={formData.expAmount} onChange={handleChange} />
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