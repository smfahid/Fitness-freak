import React from 'react';
import './Cartsection.css';
import Image from './../images/me.png';

const CartSection = () => {
    return (
        <div className='py-4'>
            <div className='parent-2 flex justify-center items-center py-3'>
                <img className='' src={Image} alt="pic" />
                <p className='px-2 text-xl font-bold'>S.M.Fahid</p>
            </div>
            <div className='flex m-auto bg-slate-100 justify-center items-center rounded-lg py-2 my-5 w-4/5'>
                <div className='px-2'>
                    <p className='text-lg font-bold'>65kg</p>
                    <p className='text-sm opacity-75'>Weight</p>
                </div>
                <div className='px-2'>
                    <p className='text-lg font-bold'>5.8</p>
                    <p className='text-sm opacity-75'>Height</p>
                </div>
                <div className='px-2'>
                    <p className='text-lg font-bold'>24yrs</p>
                    <p className='text-sm opacity-75'>Age</p>
                </div>
            </div>
        </div>
        
    );
};

export default CartSection;