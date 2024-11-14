import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';

const RightNavbar = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold my-6 '>Login With</h2>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightNavbar;