import React from 'react';
import {FaInstagram} from "react-icons/fa";

const SideInstagram = () => {
    return (
        <div className='mt-10'>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Instagram</span> Posts</h3>
            <div className='mt-10 flex flex-row flex-wrap gap-1 lg:gap-2 xl:gap-1'>
                <div className='w-[32%] aspect-square bg-insta rounded-lg lg:w-[30%] xl:w-[32%]'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg lg:w-[30%] xl:w-[32%]'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg lg:w-[30%] xl:w-[32%]'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg lg:w-[30%] xl:w-[32%]'></div>
                <div className='w-[32%] aspect-square bg-instaDark rounded-lg flex justify-center items-center lg:w-[30%] xl:w-[32%]'><FaInstagram className='text-2xl text-white' /></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg lg:w-[30%] xl:w-[32%]'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg lg:w-[30%] xl:w-[32%]'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg lg:w-[30%] xl:w-[32%]'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg lg:w-[30%] xl:w-[32%]'></div>
            </div>
        </div>
    );
};

export default SideInstagram;