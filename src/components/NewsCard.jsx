import React from 'react';
import PropTypes from 'prop-types';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const NewsCard = ({ singleNews }) => {
  return (
      <div className="card w-full my-10 p-6 bg-base-100 shadow-xl text-start space-y-5">
              <div className='space-y-2'>
              <div className='bg-[#F3F3F3] px-2  flex justify-between items-center'>
              <div className="flex items-center my-2 ">
          <img src={singleNews.author.img} alt="Author" className="w-8 h-8 rounded-full mr-2"/>
          <div>
          <span className="text-sm">{singleNews.author.name}</span>
        <p className=" text-sm text-gray-500 text-start">{new Date(singleNews.author.published_date).toDateString()}</p>
            </div>
                  </div>
                  <div className='flex'>
                      <CiBookmark />
                      <CiShare2 />
                  </div>
             </div>
          <h2 className="card-title">{singleNews.title}</h2>
              
          </div>
      <figure>
        <img src={singleNews.thumbnail_url} alt="News" className=" mt-4 rounded-md bg-slate-400 aspect-video w-full object-top "/>
      </figure>
      <div className="">
       
              <p>{singleNews.details}</p>
              <a className='text-orange-400'>Read More</a>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="rating rating-sm mr-2">
              {Array.from({ length: 5 }, (_, index) => (
                index < singleNews.rating.number
                  ? <FaStar key={index} className="text-yellow-500"/>
                  : <FaRegStar key={index} className="text-yellow-500"/>
              ))}
            </div>
            <span>{singleNews.rating.number}</span>
          </div>
          <span className="text-sm">{singleNews.total_view} views</span>
        </div>
      </div>
    </div>
  );
};

// NewsCard.propTypes = {
//   singleNews: PropTypes.shape({
//     thumbnail_url: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       published_date: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//     }).isRequired,
//     details: PropTypes.string.isRequired,
//     rating: PropTypes.shape({
//       number: PropTypes.number.isRequired,
//     }).isRequired,
//     total_view: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default NewsCard;
