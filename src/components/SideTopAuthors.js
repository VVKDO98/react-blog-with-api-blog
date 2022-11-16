import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import FetchUsers from '../hooks/FetchUsers';

const SideTopAuthors = () => {
    const {loading, error, data} = FetchUsers();
    if (loading) return <p>Loading Top Authors</p>;
    if (error) return <p>Unable to Top Authors</p>;

    console.log(data);

    return (
        <div className='mt-10 lg:mt-0'>
            <h3 className='font-semibold text-xl'><span className='py-0.5 px-2 text-white bg-green'>Top</span> Authors</h3>
            {data.map((data, index) => {
                return  <div key={index} className='my-10 flex flex-row items-center gap-6'>
                            <div className='h-20 w-20 rounded-full bg-green flex justify-center items-center overflow-hidden'>
                                <img className='w-8/12 h-8/12' src="./assets/img/tortue.png" alt=""/>
                            </div>
                            <div>
                                <p className='mb-1 text-lg font-semibold text-black'>{data.username}</p>
                                <p className='mb-3 text-base font-light'>{data.title}</p>
                                <div className='flex flex-row gap-3'>
                                    <a href="/"><FaFacebookF className='text-lg p-1 outline outline-1 rounded text-grey hover:text-white hover:bg-green' /></a>
                                    <a href="/"><FaTwitter className='text-lg p-1 outline outline-1 rounded text-grey hover:text-white hover:bg-green'/></a>
                                    <a href="/"><FaInstagram className='text-lg p-1 outline outline-1 rounded text-grey hover:text-white hover:bg-green'/></a>
                                </div>
                            </div>
                        </div>
            })}
        </div>
    );
};

export default SideTopAuthors;