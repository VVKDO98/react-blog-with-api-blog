import React from 'react';
import RecentlyPosts from './RecentlyPosted';

const MainContent = ({data}) => {
    return (
        <div id="mainContent" className='mt-10'>
            <RecentlyPosts data={data}/>
         </div>
    );
};

export default MainContent;