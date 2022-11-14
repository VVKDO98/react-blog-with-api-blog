import React from 'react';
import RecentlyPostedArticle from './RecentlyPostedArticle';

const RecentlyPosts = ({data}) => {
    return (
        <div>
            <h2>Recently Posted</h2>
            {data.map((data) => <RecentlyPostedArticle data={data}/>)}
        </div>
    );
};

export default RecentlyPosts;