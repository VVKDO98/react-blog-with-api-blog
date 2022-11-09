import React from 'react';

const RecentPosts = ({data}) => {
    return (
        <div id='recentArticle'>
            <img src={"./assets/img/" + data.image_url} alt={"Banner of " + data.title} />
            <p>{data.categories.name}</p>
            <h3>{data.title}</h3>
            <div>
                <p>{data.user.name}</p>
                <p>{data.created_at}</p>
            </div>
            <p>{data.excerpt}</p>
        </div>
    );
};

export default RecentPosts;