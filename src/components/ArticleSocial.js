import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const ArticleSocial = () => {
    return (
        <div className='my-14 flex flex-row items-center justify-center'>
            <div className='w-1/6 lg:w-1/3'>
                <hr className='border border-1 border-grey'/>
            </div>
            <div className='w-4/6 flex flex-row items-center justify-center gap-6 text-xl text-grey lg:w-1/3 lg:gap-4 xl:gap-6'>
                <FaFacebookF className=' hover:text-green'/>
                <FaTwitter className=' hover:text-green'/>
                <FaInstagram className=' hover:text-green'/>
                <FaPinterestP className=' hover:text-green'/>
            </div>
            <div className='w-1/6 lg:w-1/3'>
                <hr className='border border-1 border-grey'/>
            </div>
        </div>
    );
};

export default ArticleSocial;