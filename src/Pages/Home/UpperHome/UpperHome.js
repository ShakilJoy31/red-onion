import React from 'react';
import backgroundImg from '../../../images/bannerbackground.png'; 
import BottomHome from '../BottomHome/BottomHome';
import MiddleHome from '../MiddleHome/MiddleHome';

const UpperHome = () => {
    return (
            <div>
            <div className='d-flex pt-5 justify-content-center' style={{backgroundImage: `url(${backgroundImg})`, backgroundRepeat: 'no-repeat', height: '800px'}}>
            <div className='pt-5'>
                <h1>Best Food Waiting for your Stomach</h1>
                <div>
                    <input style={{border: 'none'}} className='rounded-pill fs-3 ps-5' type="text" name="" id="" />
                    <button style={{border: 'none'}} className='ps-4 pe-4 text-info bg-danger rounded-pill fs-3'>Search</button>
                </div>
            </div>
        </div>
            <MiddleHome></MiddleHome>
        </div>  
    );
};

export default UpperHome;