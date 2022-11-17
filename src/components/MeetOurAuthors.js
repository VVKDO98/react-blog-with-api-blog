import React from 'react';
import {FaArrowRight, FaEdit} from 'react-icons/fa'
import FetchUsers from '../hooks/FetchUsers';

const MeetOurAuthors = () => {
    const {loading, error, data} = FetchUsers();
    console.log(data);
    if (error) return <p>Loading of articles</p>;
    if (loading) return <div className="w-full h-screen flex items-center justify-center"><img src="./assets/img/spinner.svg" alt="" /></div>;
    return (
        <div className='my-10 w-4/5 mx-auto flex flex-col'>
            <h1 className='mb-8 text-2xl text-justify text-black font-semibold lg:text-center'><span className='text-white bg-green py-0.5 px-2'>Meet</span> Our Authors</h1>
            <div className='lg:flex lg:justify-center lg:items-start lg:gap-20 lg:mb-24'>
                {data.map((authors) => {
                    return  <div className='mt-10 flex flex-row items-center gap-6'>
                                <div className='w-40 aspect-square bg-green flex justify-center items-center overflow-hidden lg:w-36'>
                                    <img className='w-8/12 h-8/12' src="./assets/img/tortue.png" alt="default" />
                                </div>
                                <div>
                                    <h2 className='mb-3 text-2xl font-semibold text-black'>{authors.name}</h2>
                                    <p className='mb-5 text-base text-grey font-medium'>{authors.Posts.length} Posts</p>
                                    <div className='flex items-center gap-2'>
                                        <a className='text-base text-green font-normal' href="/">See details about author</a>
                                        <FaArrowRight className='text-base text-green font-normal'/>
                                    </div>
                                </div>
                            </div>
                })}
            </div>
            <div className='mt-10 p-6 w-full bg-bannercolor flex flex-col items-center justify-center lg:mt-0'>
                <h2 className='mb-4 text-xl text-justify font-semibold'>Want to write on notebook ?</h2>
                <p className='mb-8 text-base text-justify font-normal'>There have some simple steps, by following these steps you can be a regular author in notebook</p>
                <button className='w-52 h-12 border border-1 rounded-md border-green text-green text-base font-normal flex items-center justify-center gap-3'><FaEdit/>Write on notebook</button>
            </div>
        </div>
    );
};

export default MeetOurAuthors;