import React, { useState, useEffect } from 'react';
import '../CSS/donationList.css'

const DonationListMem = () => {
  const [donations, setDonations] = useState([]);
  
  useEffect(() => {
    const memUserId = localStorage.getItem('userId');
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
        const matchedObjects = [];
        setDonations(matchedObjects)

        data.forEach(element => {
          if(element.member_id === memUserId ){
            matchedObjects.push(element);    
          }
        });
        
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
      </table>
    </div>
  );
};

export default DonationListMem;
