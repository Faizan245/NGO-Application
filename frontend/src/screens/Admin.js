import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Donations from '../components/Donations';
import AllRecipients from '../components/AllRecipients';
import AllExpenses from '../components/AllExpenses';
function Admin() {
    const [selectedOption, setSelectedOption] = useState(null);
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        navigate("/login")
    }
    const handleLogIn = () => {
        navigate('/login')
    }
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <>
            <div>
                <div className='nav'>

                    <div className="heading">
                        <a href='/'><img src='./logo.png' alt='logo' /></a>
                        <a href='/'><h1>AL-ANSARI HUMAN CARE SOCIETY</h1></a>
                    </div>
                    <div className='userinfo'>
                        <ul>
                            <li><h5>Admin</h5></li>
                            <li>
                                {(!localStorage.getItem("token"))
                                    ?
                                    <div >
                                        <button className='navBtn' onClick={handleLogIn}>Login</button>
                                    </div>
                                    :
                                    <button className='navBtn' onClick={handleLogout}>Logout</button>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='dash'>
                    <div className={`option ${selectedOption === 'Add a Donation' ? 'active' : ''}`} onClick={() => handleOptionClick('Add a Donation')}>
                        <h3>Show All Donations</h3>
                    </div>
                    <div className={`option ${selectedOption === 'Add Recipient' ? 'active' : ''}`} onClick={() => handleOptionClick('Add Recipient')}>
                        <h3>Show All Recipient</h3>
                    </div>
                    <div className={`option ${selectedOption === 'Add Expenses' ? 'active' : ''}`} onClick={() => handleOptionClick('Add Expenses')}>
                        <h3>Show All Expenses</h3>
                    </div>
                    
                </div>
                {selectedOption && (
                    <div className="info-container">
                        {(selectedOption === 'Add a Donation') ? <Donations/> :
                            (selectedOption === 'Add Recipient') ? <AllRecipients /> :
                                (selectedOption === 'Add Expenses') ? <AllExpenses /> :
                                    
                                        ''
                        }
                    </div>
                )}
            </div>
        </>
    )
}

export default Admin