import React from 'react';
import moment from 'moment/moment';
import { IoCalendarClear } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PopularArticle = ({data}) => {
    return (
        <div className='mt-10 w-full'>
            <Link to={"/categories/" + data.Categories.id} className='text-xs text-white bg-green rounded px-2 py-0.5'>{data.Categories.name}</Link>
            <h1 className='mt-2 text-xl font-semibold leading-7'><Link to={"/categories/" + data.Categories.id + "/" + data.id}>{data.title}</Link></h1>
            <div className='mt-2 w-full h-52 rounded-lg flex justify-center items-center overflow-hidden lg:hidden'>
                <Link to={"/categories/" + data.Categories.id + "/" + data.id}>
                    <img src={"./assets/img/" + data.image_url} alt={data.alt} />
                </Link>
            </div>
            <div className='mt-4 flex flex-row items-center gap-3 text-base font-normal text-grey'>
                <span>{data.Users.name}</span>
                <span>|</span>
                <IoCalendarClear/> 
                <span>{moment(data.created_at).format('DD MMMM YYYY')}</span>
            </div>
            <p className='mt-1 text-base font-normal text-grey'>{data.excerpt}</p>
        </div>
    );
};

export default PopularArticle;