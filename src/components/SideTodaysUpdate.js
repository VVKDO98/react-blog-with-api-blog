import React from 'react';

const SideTodaysUpdate = () => {
    
    return (
        <div className='mt-10'>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Today's</span> Update</h3>
            <div className='mt-10 w-full flex flex-row flex-wrap gap-4 lg:gap-6 xl:gap-4'>
                <div className='w-[47%] h-28 bg-bannercolor flex flex-col justify-center items-center rounded-2xl lg:w-[44%] xl:w-[47%]'>
                    <p className='text-2xl text-green font-semibold'>14</p>
                    <p className='text-base text-black font-normal text-center'>New Posts</p>
                </div>
                <div className='w-[47%] h-28 bg-bannercolor flex flex-col justify-center items-center rounded-2xl lg:w-[44%] xl:w-[47%]'>
                    <p className='text-2xl text-green font-semibold'>480</p>
                    <p className='text-base text-black font-normal text-center'>Total Visitors</p>
                </div>
                <div className='w-[47%] h-28 bg-bannercolor flex flex-col justify-center items-center rounded-2xl lg:w-[44%] xl:w-[47%]'>
                    <p className='text-2xl text-green font-semibold'>29</p>
                    <p className='text-base text-black font-normal text-center'>New Subscribers</p>
                </div>
                <div className='w-[47%] h-28 bg-bannercolor flex flex-col justify-center items-center rounded-2xl lg:w-[44%] xl:w-[47%]'>
                    <p className='text-2xl text-green font-semibold'>138</p>
                    <p className='text-base text-black font-normal text-center'>Blog Read</p>
                </div>
            </div>
        </div>
    );
};

export default SideTodaysUpdate;