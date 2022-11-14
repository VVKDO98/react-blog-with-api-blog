import React from 'react';
import FeaturedArticle from './FeaturedArticle';

const FeaturedThisMonth = ({data}) => {
    return (
        <div className='w-11/12 m-auto lg:w-4/6 lg:m-0'>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Featured</span> This Month</h3>
            <div className='lg:flex lg:flex-row lg:items-start lg:gap-8'>
                {data.slice(0, 2).map((data, index) => <FeaturedArticle data={data} key={index}/>)}
            </div>
        </div>
    );
};

export default FeaturedThisMonth;