import React from 'react';
import {FaInstagram} from "react-icons/fa";

const SideInstagram = () => {
    return (
        <div className='mt-10'>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Instagram</span> Posts</h3>
            <div className='mt-10 flex flex-row flex-wrap gap-2'>
                <div className='w-[32%] aspect-square bg-insta rounded-lg'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg'></div>
                <div className='w-[32%] aspect-square bg-instaDark rounded-lg flex justify-center items-center'><FaInstagram className='text-2xl text-white' /></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg'></div>
                <div className='w-[32%] aspect-square bg-insta rounded-lg'></div>
            </div>
        </div>
    );
};

export default SideInstagram;