import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link, NavLink } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center space-x-2 bg-[#F3F3F3] p-3'>
            <NavLink to='/news'><button className=' bg-[#D72050] text-white px-3 py-2 text-xl'>Latest</button></NavLink>
           <Link to='/news'> <Marquee><p className='text-lg font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nobis.</p></Marquee></Link>
        </div>
    );
};

export default LatestNews;