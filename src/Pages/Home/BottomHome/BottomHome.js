import React from 'react';
import picture1 from '../../../images/adult-blur-blurred-background-687824.png'
import picture2 from '../../../images/chef-cook-food-33614.png'
import picture3 from '../../../images/architecture-building-city-2047397.png'

const BottomHome = () => {
    return (
        <div className='mt-5 ms-5 me-5'>
            <div>
            <div className='d-flex w-50 justify-content-start me-auto row'>
                <div className='ms-5 col-lg-8'>
                <h2 className='d-flex justify-content-start'>Why You Should Choose Us</h2>
                <p className='d-flex justify-content-start'> <br /> We Can provide you the best Delevary food with due time and a resonable price.  We have the best Chef to cook delicious food for you to eat. You can enjoy it with your family and friends. </p>
                </div>
            </div>

            <div className='row g-2'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <img className='w-75' src={picture1} alt="" />
                <div>
                <h4>Fast Delevery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam hic veritatis amet beatae facilis quidem ipsa praesentium unde dolor! Eaque, quam? Sint velit dolorem commodi quasi animi eos enim!</p>
                <p>see more</p>
                </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
                <img className='w-75' src={picture2} alt="" />
                <h4>Fast Delevery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam hic veritatis amet beatae facilis quidem ipsa praesentium unde dolor! Eaque, quam? Sint velit dolorem commodi quasi animi eos enim!</p>
                <p>see more</p>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
                <img className='w-75' src={picture3} alt="" />
                <h4>Fast Delevery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam hic veritatis amet beatae facilis quidem ipsa praesentium unde dolor! Eaque, quam? Sint velit dolorem commodi quasi animi eos enim!</p>
                <p>see more</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default BottomHome;