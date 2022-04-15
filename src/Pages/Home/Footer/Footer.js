import React from 'react';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.897)'}} className='d-flex justify-content-between pt-4 pb-4'>
                <div className='me-5'>
                    <img className='w-25 me-5' src={logo} alt="" />
                </div>
                <div className='d-flex me-5 pe-5'>
                    <div className='text-white me-4'>
                        <p>About Online Food</p>
                        <p>Read Our blogs</p>
                        <p>Sign Up to Deliver</p>
                        <p>Add your Restaurant</p>
                    </div>

                    <div className='ms-4 text-white'>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View All Cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.897)'}} className='d-flex justify-content-between ps-5 pe-5'>
                <p className='ms-5 pt-4 text-white'>copyright 2020 Online food</p>
                <div className='pt-4 pe-5 d-flex'>
                    <p className='me-4 text-white'>Privacy Policy</p>
                    <p className='me-4 text-white'>Terms of use</p>
                    <p className='text-white'>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;