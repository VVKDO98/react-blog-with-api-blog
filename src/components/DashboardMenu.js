import React from 'react';
import { MdNotes, MdTag, MdAccountCircle } from "react-icons/md";

const DashboardMenu = () => {
    return (
        <div className='col-span-1 bg-white'>
            <div className='w-4/5 mx-auto'>
                <h2 className='my-10 text-3xl text-center text-green font-bold'>DASHBOARD</h2>
                <div className='w-full flex flex-col items-center'>
                    <button className='w-full mb-5 h-14 pl-5 rounded flex items-center gap-4 text-lg text-grey text-left font-semibold hover:bg-green hover:text-white hover:drop-shadow-xl transition-all duration-100'><MdNotes className='text-2xl'/>Articles</button >
                    <button className='w-full mb-5 h-14 pl-5 rounded flex items-center gap-4 text-lg text-grey text-left font-semibold hover:bg-green hover:text-white hover:drop-shadow-xl transition-all duration-100'><MdTag className='text-2xl'/>Categories</button >
                    <button className='w-full mb-5 h-14 pl-5 rounded flex items-center gap-4 text-lg text-grey text-left font-semibold hover:bg-green hover:text-white hover:drop-shadow-xl transition-all duration-100'><MdAccountCircle className='text-2xl'/>Users</button >
                </div>
            </div>
        </div>
    );
};

export default DashboardMenu;