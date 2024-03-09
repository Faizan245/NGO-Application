import React, { useState, useEffect } from 'react';
import '../CSS/donationList.css'

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const totalAmount = donations.reduce((acc, item) => acc + parseFloat(item.amountInFigures), 0);
  useEffect(() => {
    
    const fetchDonations = async () => {
      try {
        const response = await fetch('http://localhost:5000/donations', {
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
            <th>Amount (Words)</th>
            <th>Amount (Figures)</th>
            <th>Phone</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.memberName}</td>  
              <td>{donation.fullName}</td>
              <td>{donation.fatherName}</td>
              <td>{donation.city}</td>
              <td>{donation.amountInWords}</td>
              <td>{donation.amountInFigures}</td>
              <td>{donation.phone}</td>
              <td>{donation.date}</td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>Total amount:</tr>
        </thead>
        <tbody>
          <td>
            {totalAmount}
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Donations;
