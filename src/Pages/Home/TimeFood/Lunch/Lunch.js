import React from 'react';
import picture1 from '../../../../images/lunch/lunch1.png'; 
import picture2 from '../../../../images/lunch/lunch2.png'; 
import picture3 from '../../../../images/lunch/lunch3.png'; 
import picture4 from '../../../../images/lunch/lunch4.png'; 
import picture5 from '../../../../images/lunch/lunch5.png'; 
import picture6 from '../../../../images/lunch/lunch6.png'; 

const Lunch = () => {
    return (
        <div>
            <div className='row g-4'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='w-50' src={picture1} alt="" />
                    <h3>Beef Steak</h3>
                    <p>How We dream about our future</p>
                    <h1>$15.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='w-50' src={picture2} alt="" />
                    <h3>Honey-Soy-Glazed with Peppers</h3>
                    <p>How We dream about our future</p>
                    <h1>$7.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='w-50' src={picture3} alt="" />
                    <h3>Tarragon-Rubbed-Salmon</h3>
                    <p>How We dream about our future</p>
                    <h1>$6.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='w-50' src={picture4} alt="" />
                    <h3>Indian Lunch</h3>
                    <p>How We dream about our future</p>
                    <h1>$8.99</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='w-50' src={picture5} alt="" />
                    <h3>Fried Chicken Bento</h3>
                    <p>How We dream about our future</p>
                    <h1>$25.50</h1>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <img className='w-50' src={picture6} alt="" />
                    <h3>Healthy Meal Plan</h3>
                    <p>How We dream about our future</p>
                    <h1>$10.99</h1>
                </div>
            </div>
        </div>
    );
};

export default Lunch;