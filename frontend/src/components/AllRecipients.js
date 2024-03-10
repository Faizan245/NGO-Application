import React, { useState, useEffect } from 'react';
import '../CSS/donationList.css'
import { REACT_APP_BACKEND_URL as api} from '../config'

const AllRecipients = () => {
  const [recipients, setDonations] = useState([]);
  
  useEffect(() => {
    
    const fetchDonations = async () => {
      try {
        const response = await fetch(api + '/recipients', {
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
            <th>Full Name</th>
            <th>Father's Name</th>
            <th>City</th>
            <th>state</th>
            <th>Age</th>
            <th>Amount (Words)</th>
            <th>Amount (Figures)</th>
            <th>Mode of Transfer</th>
            <th>Phone</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient, index) => (
            <tr key={index}>
              <td>{recipient.memberName}</td>  
              <td>{recipient.fullName}</td>
              <td>{recipient.fatherName}</td>
              <td>{recipient.city}</td>
              <td>{recipient.state}</td>
              <td>{recipient.age}</td>
              <td>{recipient.amountInWords}</td>
              <td>{recipient.amountInFigures}</td>
              <td>{recipient.modeOfTransfer}</td>
              <td>{recipient.phone}</td>
              <td>{recipient.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllRecipients;
