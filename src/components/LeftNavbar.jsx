import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories,setCategory]=useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
        .then(data=>setCategory(data.data.news_category))
    },[])
    return (
        <div>
            <h2 className='text-[#403F3F] text-xl font-semibold'>All Category({categories.length})</h2>
            <div className='*:btn flex flex-col space-y-5 mt-4'>
            {
                categories.map(category=>(<NavLink key={category.category_id} to={`/category/${category.category_id}`}><button >{category.category_name}</button></NavLink>))
            }
           </div>
        </div>
    );
};

export default LeftNavbar;