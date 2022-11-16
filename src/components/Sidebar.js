import React from 'react';
import SideTopAuthors from './SideTopAuthors';
import SideCategories from './SideCategories';
import SideTodaysUpdate from './SideTodaysUpdate';
import SideAd from './SideAd';
import SideInstagram from './SideInstagram';

const Sidebar = () => {
    return (
        <div className='w-full lg:w-2/6 lg:m-0'>
            <SideTopAuthors/>
            <SideAd/>
            <SideCategories/>
            <SideTodaysUpdate/>
            <SideInstagram/>
        </div>
    );
};

export default Sidebar;