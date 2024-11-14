import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
       <div className='mx-auto text-center py-5 space-y-3'>
        
         <div>
            <img className=' mx-auto' src={logo} alt="" />
        </div>
        <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
        <h5 className='text-xl font-medium'>{format( new Date(2025, 10, 27), 'EEEE, MMMM d, yyyy')}</h5>
        
       </div>
    );
};

export default Header;