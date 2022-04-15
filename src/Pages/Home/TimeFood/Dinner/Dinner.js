import React from 'react';
import picture1 from '../../../../images/dinner/dinner1.png'; 
import picture2 from '../../../../images/dinner/dinner2.png'; 
import picture3 from '../../../../images/dinner/dinner3.png'; 
import picture4 from '../../../../images/dinner/dinner4.png'; 
import picture5 from '../../../../images/dinner/dinner5.png'; 
import picture6 from '../../../../images/dinner/dinner6.png'; 

const Dinner = () => {
    return (
        <div>
            <div>
            <div className='row g-4'>
                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture1} alt="" />
                    <h3>Baked Chicken</h3>
                    <p>How We dream about our future</p>
                    <h1>$15.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture2} alt="" />
                    <h3>Lemony Salmon Piccata</h3>
                    <p>How We dream about our future</p>
                    <h1>$10.00</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture3} alt="" />
                    <h3>Garlic Butter Baked Salmon</h3>
                    <p>How We dream about our future</p>
                    <h1>$18.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture4} alt="" />
                    <h3>French Fries with Cheese</h3>
                    <p>How We dream about our future</p>
                    <h1>$8.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture5} alt="" />
                    <h3>Pork Tenderloin With Quinoa Pilaf</h3>
                    <p>How We dream about our future</p>
                    <h1>$15.50</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12 hover-class'>
                    <img className='w-50' src={picture6} alt="" />
                    <h3>Salmon With Grapefruit and Lentil Salad</h3>
                    <p>How We dream about our future</p>
                    <h1>$20.00</h1>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dinner;