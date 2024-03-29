import React from 'react';
import { IoSearch, IoCreate } from "react-icons/io5";
import { Link } from 'react-router-dom';
import DropdownCategories from './DropdownCategories';
import DropdownLanguages from './DropdownLanguages';

const Menu = () => {
    return (
        <header>
            <nav className='w-full h-20 bg-lightgreen flex items-center'>
                <div id='navContainer' className='w-11/12 lg:w-4/5 m-auto flex justify-between items-center'>
                    <div className='hidden lg:w-1/3 lg:flex lg:flex-row lg:justify-start'>
                        <ul className='flex items-center lg:gap-4'>
                            <li><DropdownCategories/></li>
                            <li><Link to='/about' className='font-medium text-sm hover:text-green'>About</Link></li>
                            <li><Link to='/contact' className='font-medium text-sm hover:text-green'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='lg:w-1/3 lg:flex lg:flex-row lg:justify-center'>
                        <Link to='/' ><img src="/assets/img/logo.png" alt="Logo NoteBook" /></Link>
                    </div>
                    <div className='hidden lg:w-1/3 lg:flex lg:flex-row lg:justify-end'>
                        <ul className='flex items-center lg:gap-4'>
                            <li><a href="/"><IoSearch className="text-lg hover:text-green" /></a></li>
                            <li><Link to="/dashboard"><IoCreate className="text-lg hover:text-green" /></Link></li>
                            <li><DropdownLanguages/></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    );
};

export default Menu;