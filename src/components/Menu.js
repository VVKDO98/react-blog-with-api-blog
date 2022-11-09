import React from 'react';
import { IoSearch, IoCreate } from "react-icons/io5";

const Menu = () => {
    return (
        <nav className='w-full h-20 bg-lightgreen flex items-center'>
            <div id='navContainer' className='w-4/5 m-auto flex justify-between items-center'>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-14'>
                        <li><a href="/" className='font-medium text-sm hover:text-green'>Homepage</a></li>
                        <li><a href="/" className='font-medium text-sm hover:text-green'>About</a></li>
                        <li><a href="/" className='font-medium text-sm hover:text-green'>Categories</a></li>
                        <li><a href="/" className='font-medium text-sm hover:text-green'>Pages</a></li>
                    </ul>
                </div>
                <div>
                    <a href="/"><img src="./assets/img/logo.png" alt="Logo NoteBook" /></a>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-14'>
                        <li><a href="/"><IoSearch className="text-lg hover:text-green" /></a></li>
                        <li><a href="/"><IoCreate className="text-lg hover:text-green" /></a></li>
                        <li><a href="/" className='font-medium text-sm hover:text-green'>Contact</a></li>
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
    );
};

export default Menu;