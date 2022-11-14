import React from 'react';
import RecentlyPostedArticle from './RecentlyPostedArticle';

const RecentlyPosts = ({data}) => {
    return (
        <div>
            <h2>Recently Posted</h2>
            {data.map((data, index) => <RecentlyPostedArticle data={data} key={index}/>)}
        </div>
    );
};

export default RecentlyPosts;