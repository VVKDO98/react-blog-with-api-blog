import React from 'react';
import RecentlyPostedArticle from './RecentlyPostedArticle';

const RecentlyPosts = ({data}) => {
    return (
        <div className='w-full lg:w-4/6 lg:m-0'>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Recently</span> Posted</h3>
            {data.map((data, index) => <RecentlyPostedArticle data={data} key={index}/>)}
        </div>
    );
};

export default RecentlyPosts;