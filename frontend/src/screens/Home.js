import React from 'react'
import "../CSS/home.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    // const email = localStorage.getItem('userEmail', email);
    return (
        <>
            <section className="section">
                <Navbar />
                <div>
                    
                        <div className='donate-btn'>
                            <h3>Be a part of our journey to help those in need</h3>
                            <h1><a href='/donate'>Make a Donation</a></h1>
                        </div>
                       
                    
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Home