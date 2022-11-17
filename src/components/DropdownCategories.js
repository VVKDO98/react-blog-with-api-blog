import React from 'react';
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaRobot, FaPlaneDeparture, FaDumbbell, FaPizzaSlice, FaHeartbeat } from 'react-icons/fa';

const DropdownCategories = () => {
    return (
        <Popover className='relative'>
            <Popover.Button className='font-medium text-sm flex items-center gap-2 hover:text-green'>Categories<FaAngleDown/></Popover.Button>
            <Popover.Panel className='absolute top-8 z-10 font-medium text-sm'>
                <div className='w-full h-full p-5 flex flex-col justify-center bg-white rounded-lg'>
                    <Link to='/category/travel' className='flex items-center gap-2 p-3 px-5 mb-2 hover:bg-green hover:text-white focus:bg-green focus:text-white focus:outline-none'><FaPlaneDeparture/>Travel</Link>
                    <Link to='/category/technology' className='flex items-center gap-2 p-3 px-5 mb-2 hover:bg-green hover:text-white focus:bg-green focus:text-white focus:outline-none'><FaRobot/>Technology</Link>
                    <Link to='/category/lifestyle' className='flex items-center gap-2 p-3 px-5 mb-2 hover:bg-green hover:text-white focus:bg-green focus:text-white focus:outline-none'><FaDumbbell/>Lifestyle</Link>
                    <Link to='/category/food' className='flex items-center gap-2 p-3 px-5 mb-2 hover:bg-green hover:text-white focus:bg-green focus:text-white focus:outline-none'><FaPizzaSlice/>Food</Link>
                    <Link to='/category/healthcare' className='flex items-center gap-2 p-3 px-5 mb-2 hover:bg-green hover:text-white focus:bg-green focus:text-white focus:outline-none'><FaHeartbeat/>Healthcare</Link>
                </div>
            </Popover.Panel>
        </Popover>
    );
};

export default DropdownCategories;