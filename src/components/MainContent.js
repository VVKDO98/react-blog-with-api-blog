import React from 'react';
import RecentlyPosts from './RecentlyPosted';

const MainContent = ({data}) => {
    return (
        <div id="mainContent">
            <RecentlyPosts data={data}/>
         </div>
    );
};

export default MainContent;