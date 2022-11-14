import React from 'react';
import RecentlyPosts from './RecentlyPosted';
import Sidebar from './Sidebar';

const MainContent = ({data}) => {
    return (
        <div id="mainContent" className='m-auto mt-10 w-4/5 lg:flex lg:flex-row lg:justify-between'>
            <RecentlyPosts data={data}/>
            <Sidebar/>
         </div>
    );
};

export default MainContent;