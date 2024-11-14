import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const Home = () => {
    return (
        <div>
            <div>
           <header>
                <Header></Header>
            </header>
            <section>
                <LatestNews></LatestNews>
            </section>
            <nav></nav>
           </div>
           <div>
            <aside></aside>
            <main></main>
            <aside></aside>
           </div> 
        </div>
    );
};

export default Home;