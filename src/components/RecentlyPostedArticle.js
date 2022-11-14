import React from 'react';
import moment from 'moment/moment';

const RecentlyPostedArticle = ({data}) => {
    return (
        <div id='recentArticle' className='w-full flex flex-col'>
            <div className='mt-2 w-full h-52 rounded-lg flex justify-center items-center overflow-hidden lg:h-80'>
                <img className='min-w-full min-h-full object-cover' src={"./assets/img/" + data.image_url} alt={"Banner of " + data.title} />
            </div>
            <div>
                <p>{data.categories.name}</p>
                <h3>{data.title}</h3>
                <div>
                    <p>{data.user.name}</p>
                    <p>{moment(data.created_at).format('DD MMMM YYYY')}</p>
                </div>
                <p>{data.excerpt}</p>
            </div>
        </div>
    );
};

export default RecentlyPostedArticle;