import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
              <div className='*:w-full space-y-3'>
            <button className='btn'><FcGoogle /> Login With Google</button>
            <button className='btn'><FaGithub /> Login With Github</button>
           </div>
        </div>
    );
};

export default SocialLogin;