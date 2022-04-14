import React from 'react';
import logo from '../../images/logo2.png'

const Header = () => {
    return (
            <div className='d-flex bg-info p-2 justify-content-between'>
                <div className='ms-5 d-flex align-items-center'>
                    <img className='ms-5' style={{width: '170px'}} src={logo} alt="" />
                </div>
                <div className='d-flex align-items-center me-2'>
                    <p className='me-3 pt-2 fs-3'>cart</p>
                    <p className='me-3 pt-2 fs-3'>Log in</p>
                    <button className='me-3 rounded-pill bg-danger text-white p-2'>Sign up</button>
                </div>
            </div>
    );
};

export default Header;