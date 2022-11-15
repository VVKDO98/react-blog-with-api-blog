import React from 'react';
import useFetch from '../hooks/useFetch';

const SideCategories = () => {
    const url_base = "http://localhost:3030/";
    const { loading, error, data } = useFetch(url_base + "categories");

    if (loading) return <p>Loading Top Authors</p>;
    if (error) return <p>Unable to Top Authors</p>;

    console.log(data);
    return (
        <div className='mt-10'>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Categories</span></h3>
            {data.map((data) => {
                return  <div className='mt-10'>
                            <div className='mb-3 flex flex-row justify-between items-center'>
                                <p className='text-base font-medium'>{data.name}</p>
                                <p className='text-base font-medium'>12</p>
                            </div>
                            <hr className='border border-dotted border-hrcolor'/>
                        </div>
            })}
        </div>
    );
};

export default SideCategories;