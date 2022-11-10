import React from 'react';
import FeaturedArticle from './FeaturedArticle';

const FeaturedThisMonth = ({data}) => {
    return (
        <div className='w-11/12 m-auto'>
            <h2 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Featured</span> This Month</h2>
            {data.map((data) => <FeaturedArticle data={data}/>)}
        </div>
    );
};

export default FeaturedThisMonth;