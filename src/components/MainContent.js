import React from 'react';
import RecentlyPosts from './RecentlyPosted';

const MainContent = ({data}) => {
    return (
        <div id="mainContent" className='m-auto mt-10 w-4/5'>
            <RecentlyPosts data={data}/>
         </div>
    );
};

export default MainContent;