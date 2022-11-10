import React from 'react';
import moment from 'moment/moment';
import { IoCalendarClear } from "react-icons/io5";

const FeaturedArticle = ({data}) => {
    return (
        <div className='mt-10 w-full lg:w-1/2'>
            <a href="/" className='text-xs text-white bg-green rounded px-2 py-0.5'>{data.categories.name}</a>
            <h1 className='text-xl font-semibold leading-7 mt-4'>{data.title}</h1>
            <img className='mt-6 rounded-lg' src={"./assets/img/" + data.image_url} alt={data.tite} />
            <div className='my-6 flex flex-row items-center gap-3 text-base font-normal text-grey'>
                <span>{data.user.name}</span>
                <span>|</span>
                <IoCalendarClear/> 
                <span>{moment(data.created_at).format('DD MMMM YYYY')}</span>
            </div>
            <p className='text-base font-normal text-grey'>{data.excerpt}</p>
        </div>
    );
};

export default FeaturedArticle;