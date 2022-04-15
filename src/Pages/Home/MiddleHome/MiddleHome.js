import React from 'react';
import { Link } from 'react-router-dom';

const MiddleHome = () => {

    const handleBreakFast = () =>{
        console.log('breakfast is clicked'); 
    }
    const handleLunch = () =>{
        console.log('lunch is clicked');
    }
    const handleDinner = () =>{
        console.log('dinner is clicked');
    }

    return (
        <div className='d-flex justify-content-center mb-5'>
            <div className='d-flex'>
            <h2 onClick={handleBreakFast} className='me-5 ms-5'><Link className='text-decoration-none text-black' to='/breakfast'>BreakFast</Link></h2>

            <h2 onClick={handleLunch} className='me-5 ms-5'><Link className='text-decoration-none text-black' to='/lunch'>Lunch</Link></h2>

            <h2 onClick={handleDinner} className='ms-5 me-5'><Link className='text-decoration-none text-black' to='/dinner'>Dinner</Link></h2>
            </div>
        </div>
    );
};

export default MiddleHome;