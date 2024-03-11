import React, { useState, useEffect } from 'react';
import '../CSS/donationList.css'
import { REACT_APP_BACKEND_URL as api } from '../config'
const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  
  useEffect(() => {

    const fetchDonations = async () => {
      try {
        const response = await fetch(api + '/donations', {
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
  
  // Filter donations based on selected currency
  const filteredDonations = donations.filter(donation => donation.currency === selectedCurrency);
  // const totalAmount = filteredDonations.reduce((acc, item) => acc + parseFloat(item.amountInFigures), 0);
  // Handle currency selection change
  const handleCurrencyChange = (e) => {
    
    setSelectedCurrency(e.target.value);
    
  };

  return (
    <>

      <div className='containerD'>
        <div className='filterContainer'>
          <h5>Sort by Currency</h5>
          <select value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="show">Show All Currency</option>
            <option value="Dinar">KD</option>
            <option value="SaudiRiyal">SAR</option>
            <option value="QatarRiyal">QAR</option>
            <option value="INR">INR</option>
          </select>
        </div>
        <table className='data-tbl'>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Full Name</th>
              <th>Father's Name</th>
              <th>City</th>
              <th>Amount (Words)</th>
              <th>Amount (Figures)</th>
              <th>Currency</th>
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            
            {
            (selectedCurrency === 'show') ? 
            
            donations.map((donation, index) => (
              <tr key={index}>
                <td>{donation.memberName}</td>
                <td>{donation.fullName}</td>
                <td>{donation.fatherName}</td>
                <td>{donation.city}</td>
                <td>{donation.amountInWords}</td>
                <td>{donation.amountInFigures}</td>
                <td>{donation.currency}</td>
                <td>{donation.phone}</td>
                <td>{donation.date}</td>
              </tr>
            )) : 
            filteredDonations.map((donation, index) => (
              <tr key={index}>
                <td>{donation.memberName}</td>
                <td>{donation.fullName}</td>
                <td>{donation.fatherName}</td>
                <td>{donation.city}</td>
                <td>{donation.amountInWords}</td>
                <td>{donation.amountInFigures}</td>
                <td>{donation.currency}</td>
                <td>{donation.phone}</td>
                <td>{donation.date}</td>
              </tr>
            ))
          }
          </tbody>

        </table>
      </div>

    </>
  );
};

export default Donations;
