import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData()
    // console.log(news.length)
    return (
        <div className=''>
            {
                news.map((singleNews,i)=><NewsCard key={i} singleNews={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;