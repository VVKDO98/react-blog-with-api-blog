import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='py-10 w-full h-full flex flex-col items-center justify-center lg:py-28'>
            <img className='w-full lg:w-1/3' src="/assets/img/404.png" alt="Error 404" />
            <Link className='px-2 py-1 bg-green rounded text-white hover:bg-white hover:outline hover:outline-1 hover:outline-green hover:text-green' to={"/"}>Back to home</Link>
        </div>
    );
};

export default Error404;