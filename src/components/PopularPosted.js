import React from 'react';
import PopularArticle from './PopularArticle';

const PopularPosted = ({data}) => {
    return (
        <div className='w-11/12 m-auto mt-10 lg:w-2/6 lg:m-0'>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Popular</span> Posted</h3>
            <div className='lg:flex lg:flex-col lg:items-start'>
                {data.slice(0, 2).map((data) => <PopularArticle data={data}/>)}
            </div>
        </div>
    );
};

export default PopularPosted;