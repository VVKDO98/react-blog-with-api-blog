import React from 'react';
import FetchCategories from '../hooks/FetchCategories';

const SideCategories = () => {
    const {loading, error, data} = FetchCategories();
    if (loading) return <p>Loading Top Authors</p>;
    if (error) return <p>Unable to Top Authors</p>;

    console.log(data);
    return (
        <div className='mt-10'>
            <h3 className='font-semibold text-xl mb-10'><span className='py-0.5 px-2 text-white bg-green'>Categories</span></h3>
            {data.map((data, index) => {
                return  <div className='mb-3' key={index}>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <p className='text-base font-medium'>{data.name}</p>
                                <p className='text-base font-medium'>{data.Posts.length}</p>
                            </div>
                            <hr className='border border-dotted border-hrcolor'/>
                        </div>
            })}
        </div>
    );
};

export default SideCategories;