import React from 'react';
import { IoSearch, IoCreate } from "react-icons/io5";
import { Link } from 'react-router-dom';
import DropdownCategories from './DropdownCategories';

const Menu = () => {
    return (
        <header>
            <nav className='w-full h-20 bg-lightgreen flex items-center'>
                <div id='navContainer' className='w-11/12 lg:w-4/5 m-auto flex justify-between items-center'>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center lg:gap-4'>
                            <li><DropdownCategories/></li>
                            <li><Link to='/about' className='font-medium text-sm hover:text-green'>About</Link></li>
                            <li><Link to='/contact' className='font-medium text-sm hover:text-green'>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Link to='/' ><img src="./assets/img/logo.png" alt="Logo NoteBook" /></Link>
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center lg:gap-4'>
                            <li><a href="/"><IoSearch className="text-lg hover:text-green" /></a></li>
                            <li><a href="/"><IoCreate className="text-lg hover:text-green" /></a></li>
                            <li>
                                <select name="langue" className='font-medium text-sm bg-lightgreen'>
                                    <option value="en" className='font-medium text-sm'>En</option>
                                    <option value="fr" className='font-medium text-sm'>Fr</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    );
};

export default Menu;