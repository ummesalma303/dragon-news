import React from 'react';
import { NavLink } from 'react-router-dom';
import userLogo from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between pt-4 items-center'>
            <div></div>
            <ul className='text-center space-x-6 *:text-[#706F6F] text-lg'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </ul>
            <div className='flex items-center space-x-4'>
                <img className='' src={userLogo} alt="" />
                <button className='btn btn-neutral rounded-none px-6 text-xl'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;