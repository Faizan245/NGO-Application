import React, { useState, useEffect } from 'react';
import '../CSS/donationList.css'
import { REACT_APP_BACKEND_URL as api} from '../config'
const AllExpenses = () => {
  const [expenses, setDonations] = useState([]);
  
  useEffect(() => {
    
    const fetchDonations = async () => {
      try {
        const response = await fetch(api + '/show-expenses', {
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Example Authorization header
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch donations');
        }
        const data = await response.json();
        console.log(data)
        setDonations(data)

        
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  return (
    <div className='containerD'>
      
      <table className='data-tbl'>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Expense</th>
            <th>Expense Amount</th>
            <th>Description</th>
            
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.memberName}</td>  
              <td>{expense.expense}</td>
              <td>{expense.expAmount}</td>
              <td>{expense.description}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllExpenses;
