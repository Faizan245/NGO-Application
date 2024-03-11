import React from 'react'

import "../CSS/member.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import DonationListMem from '../components/DonationListMem';
import Recipient from "../components/Recipient.js"
import Expenses from "../components/Expenses.js"
import DonationViaMem from "../components/DonationViaMem.js"
// import Footer from "../components/Footer.js"
// import "../CSS/footer.css"
import "../CSS/donate.css"

function Member() {
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
            <div className='boxcontainer'>
                <div className='nav'>

                    <div className="heading">
                        <a href='/'><img src='./logo.png' alt='logo' /></a>
                        <a href='/'><h1>AL-ANSARI HUMAN CARE SOCIETY</h1></a>
                    </div>
                    <div className='userinfo'>
                        <ul>
                            <li><h5>Member</h5></li>
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
                        <h3>Add a Donation</h3>
                    </div>
                    <div className={`option ${selectedOption === 'Add Recipient' ? 'active' : ''}`} onClick={() => handleOptionClick('Add Recipient')}>
                        <h3>Add Recipient</h3>
                    </div>
                    <div className={`option ${selectedOption === 'Add Expenses' ? 'active' : ''}`} onClick={() => handleOptionClick('Add Expenses')}>
                        <h3>Add Expenses</h3>
                    </div>
                    <div className={`option ${selectedOption === 'Show Donations' ? 'active' : ''}`} onClick={() => handleOptionClick('Show Donations')}>
                        <h3>Show Donations</h3>
                    </div>
                </div>
                {selectedOption && (
                    <div className="info-container">
                        {(selectedOption === 'Add a Donation') ? <DonationViaMem /> :
                            (selectedOption === 'Add Recipient') ? <Recipient /> :
                                (selectedOption === 'Add Expenses') ? <Expenses /> :
                                    (selectedOption === 'Show Donations') ? <DonationListMem /> :
                                        ''
                        }
                    </div>
                )}
                {/* <Footer/> */}
            </div>
            
        </>
    )
}

export default Member