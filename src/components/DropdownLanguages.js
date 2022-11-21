import React from 'react';
import { Popover } from '@headlessui/react';
import { FaAngleDown, FaLanguage } from 'react-icons/fa';
import { GB, FR } from 'country-flag-icons/react/3x2'

const DropdownLanguages = () => {
    return (
        <Popover className='relative'>
            <Popover.Button className='font-medium text-lg flex items-center gap-2 hover:text-green'><FaLanguage/><FaAngleDown/></Popover.Button>
            <Popover.Panel className='absolute top-8 z-10 font-medium text-sm'>
                <div className='w-24 h-full p-5 flex flex-col justify-center bg-white rounded-lg'>
                    <GB title='English' className='p-3 px-2 mb-2 hover:bg-green focus:bg-green'/>
                    <FR title='Français' className='p-3 px-2 mb-2 hover:bg-green focus:bg-green'/>
                </div>
            </Popover.Panel>
        </Popover>
    );
};

export default DropdownLanguages;