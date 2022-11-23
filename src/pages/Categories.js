import React from 'react';
import { FaRobot, FaPlaneDeparture, FaDumbbell, FaPizzaSlice, FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Categories = () => {
    return (
        <Layout>
            <div className='py-10 w-full h-full bg-bannercolor flex flex-col items-center justify-center lg:py-16'>
                <h1 className='mb-10 text-3xl font-semibold lg:mb-16'>Categories</h1>
                <div className='w-4/5 mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row lg:flex-wrap lg:gap-4 lg:w-4/5'>
                    <Link to={"/categories/1"} className='text-green flex flex-col items-center justify-center bg-lightgreen w-full h-32 rounded-md lg:w-1/4 hover:bg-green hover:text-white transition-all ease-in-out'>
                        <FaPlaneDeparture className='text-3xl'/>
                        <h2 className='text-lg font-medium'>Travel</h2>
                    </Link>
                    <Link to={"/categories/2"} className='text-green flex flex-col items-center justify-center bg-lightgreen w-full h-32 rounded-md lg:w-1/4 hover:bg-green hover:text-white transition-all ease-in-out'>
                        <FaPizzaSlice className='text-3xl'/>
                        <h2 className='text-lg font-medium'>Food</h2>
                    </Link>
                    <Link to={"/categories/3"} className='text-green flex flex-col items-center justify-center bg-lightgreen w-full h-32 rounded-md lg:w-1/4 hover:bg-green hover:text-white transition-all ease-in-out'>
                        <FaRobot className='text-3xl'/>
                        <h2 className='text-lg font-medium'>Technology</h2>
                    </Link>
                    <Link to={"/categories/4"} className='text-green flex flex-col items-center justify-center bg-lightgreen w-full h-32 rounded-md lg:w-1/4 hover:bg-green hover:text-white transition-all ease-in-out'>
                        <FaHeartbeat className='text-3xl'/>
                        <h2 className='text-lg font-medium'>Lifestyle</h2>
                    </Link>
                    <Link to={"/categories/5"} className='text-green flex flex-col items-center justify-center bg-lightgreen w-full h-32 rounded-md lg:w-1/4 hover:bg-green hover:text-white transition-all ease-in-out'>
                        <FaDumbbell className='text-3xl'/>
                        <h2 className='text-lg font-medium'>Healthcare</h2>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Categories;