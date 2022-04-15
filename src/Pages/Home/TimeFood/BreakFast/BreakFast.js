import React from 'react';
import picture1 from '../../../../images/breakfast/breakfast1.png'
import picture2 from '../../../../images/breakfast/breakfast2.png'
import picture3 from '../../../../images/breakfast/breakfast3.png'
import picture4 from '../../../../images/breakfast/breakfast4.png'
import picture5 from '../../../../images/breakfast/breakfast5.png'
import picture6 from '../../../../images/breakfast/breakfast6.png'
import './BreakFast.css'; 


const BreakFast = () => {
    return (
        <div>
            <div className='row gy-4'>
                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture1} alt="" />
                    <h3>Eggs Benedict</h3>
                    <p>How we dream about our future</p>
                    <h1>$8.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture2} alt="" />
                    <h3>Breakfast Sandwich</h3>
                    <p>How we dream about our future</p>
                    <h1>$9.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture3} alt="" />
                    <h3>Baked Chicken</h3>
                    <p>How we dream about our future</p>
                    <h1>$10.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture4} alt="" />
                    <h3>Bagle And Cream cheese</h3>
                    <p>How we dream about our future</p>
                    <h1>$6.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture5} alt="" />
                    <h3>Full Breakfast Egg Toast Brunch</h3>
                    <p>How we dream about our future</p>
                    <h1>$25.50</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture6} alt="" />
                    <h3>Toast Crossain Egg</h3>
                    <p>How we dream about our future</p>
                    <h1>$19.99</h1>
                </div>
            </div>
        </div>
    );
};

export default BreakFast;