import React from 'react';
import SideTopAuthors from './SideTopAuthors';
import SideCategories from './SideCategories';
import SideTodaysUpdate from './SideTodaysUpdate';

const Sidebar = () => {
    return (
        <div className='w-11/12 lg:w-2/6 lg:m-0'>
            <SideTopAuthors/>
            {/* <SideCategories/>
            <SideTodaysUpdate/> */}
            {/* <SideAd/>*/}
        </div>
    );
};

export default Sidebar;