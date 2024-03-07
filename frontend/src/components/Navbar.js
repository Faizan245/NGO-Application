// import React from 'react'
// import '../CSS/navbar.css'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'

// function Navbar() {
//     const [showMenu, setShowMenu] = useState(false);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };

//     let navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('token')
//         navigate("/login")
//     }
//     const handleLogIn = () => {
//         navigate('/login')
//     }

//     return (
//         <>
//             <nav className="navbar">

//                 <div className="navbar-container">
//                     <div className="brand">
//                         <img src='./logo.png' alt='logo' />
//                         <h1>AL-ANSARI HUMAN CARE SOCIETY</h1>
//                     </div>
//                     <div className={`links ${showMenu ? 'show' : ''}`}>
//                         <ul>
//                             <li><a href="/">Home</a></li>
//                             <li><a href="/">Who We Are</a></li>
//                             <li><a href="/">What We Do</a></li>
//                             <li><a href="/">Contact Us</a></li>
//                             <li>{(!localStorage.getItem("token"))
//                                 ?
//                                 <div >
//                                     <button className='navBtn' onClick={handleLogIn}>Login</button>
//                                 </div>
//                                 :
//                                 <button className='navBtn' onClick={handleLogout}>Logout</button>}</li>
//                         </ul>
                        
//                     </div>
//                     <i class="ri-menu-3-fill" className='menu-btn' onClick={toggleMenu}></i>
//                     {/* <div className="menu-btn" onClick={toggleMenu}>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div> */}
//                 </div>


//             </nav>
//         </>
//     )
// }

// export default Navbar

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
      let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }
    const handleLogIn = () => {
        navigate('/login')
    }
 

   

  return (
    <nav>
      <Link to="/" className="title">
        <img src='./logo.png' alt='logo' />
        <h1>AL-ANSARI HUMAN CARE SOCIETY</h1>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {/* <span></span>
        <span></span>
        <span></span> */}
        <i class="ri-menu-3-fill"></i>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Who we are?</NavLink>
        </li>
        <li>
          <NavLink to="/services">What we do?</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
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
    </nav>
  );
};
 export default Navbar;