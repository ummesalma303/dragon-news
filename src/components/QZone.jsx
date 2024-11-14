import React from 'react';
import swimming from '../assets/swimming.png'
// import class from '../assets/'
import student from '../assets/class.png'
import ground from '../assets/playground.png'
import ads from '../assets/bg.png'
const QZone = () => {
    return (
        <div className='bg-[#F3F3F3]  mt-8'>
             <h2 className='text-start text-2xl font-semibold p-4 '>Q-Zone</h2> 
           <div className='space-y-6'>
           <div className=' border-2 border-[#c9c8c8] border-dashed '>
                <img className='mx-auto' src={swimming} alt="" />
            </div>
            <div className=' border-2 border-[#c9c8c8] border-dashed '>
                <img className='mx-auto' src={student} alt="" />
            </div>
            <div className=' border-2 border-[#c9c8c8] border-dashed '>
                <img className='mx-auto' src={ground} alt="" />
            </div>
            <div className=' border-2 border-[#c9c8c8] border-dashed '>
                <img className='w-full mx-auto' src={ads} alt="" />
            </div>
           </div>
        </div>
           
    );
};

export default QZone;