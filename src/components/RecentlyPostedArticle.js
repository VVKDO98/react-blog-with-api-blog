import React from 'react';
import moment from 'moment/moment';

const RecentlyPostedArticle = ({data}) => {
    return (
        <div id='recentArticle'>
            <img src={"./assets/img/" + data.image_url} alt={"Banner of " + data.title} />
            <p>{data.categories.name}</p>
            <h3>{data.title}</h3>
            <div>
                <p>{data.user.name}</p>
                <p>{moment(data.created_at).format('DD MMMM YYYY')}</p>
            </div>
            <p>{data.excerpt}</p>
        </div>
    );
};

export default RecentlyPostedArticle;