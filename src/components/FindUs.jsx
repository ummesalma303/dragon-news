import React from 'react';
import fb from '../assets/fb.png'
import x from '../assets/twitter.png'
import insta from '../assets/instagram.png'
const FindUs = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold my-6 '>Login With</h2>
            <div>
            <div className="join join-vertical *:justify-start w-full font-medium text-[#706F6F] *:px-8">
                <button className="btn join-item"><img src={fb} alt="" /> Facebook</button>
                <button className="btn join-item"><img src={x} alt="" />Twitter</button>
                <button className="btn join-item"><img src={insta} alt="" />Instagram</button>
            </div>
            </div>
        </div>
    );
};

export default FindUs;