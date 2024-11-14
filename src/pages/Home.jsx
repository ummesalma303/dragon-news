import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
// import LeftNvbar from '../components/LeftNavbar';
import LeftNavbar from '../components/LeftNavbar';
import RightNavbar from '../components/RightNavbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* nav part */}
            <div>
           <header>
                <Header></Header>
            </header>
            <section>
                <LatestNews></LatestNews>
            </section>
                <nav>
                    <Navbar></Navbar>
            </nav>
            </div>
            {/* main part */}
           <main className='grid md:grid-cols-12 gap-6 my-6 text-center mt-5'>
                <aside className='md:col-span-3'>
                   <LeftNavbar></LeftNavbar>
            </aside>
                <section className='md:col-span-6'>
                   <Outlet></Outlet>
            </section>
                <aside className='md:col-span-3'>
                    <RightNavbar></RightNavbar>
            </aside>
           </main> 
        </div>
    );
};

export default Home;