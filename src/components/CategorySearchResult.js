import React from 'react';
import { IoCalendarClear } from "react-icons/io5";
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const CategorySearchResult = ({data}) => {
    return (
        <>
            <Helmet>
                <title>{data.Categories.name} | Notebook</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <div id='recentArticle' className='my-10 w-full flex flex-col lg:w-2/3 lg:flex-row lg:items-center lg:gap-8'>
                <div className='mt-2 w-full h-52 rounded-lg flex justify-center items-center overflow-hidden lg:h-44 lg:w-1/2'>
                    <Link to={"/categories/" + data.Categories.id + "/" + data.id}>
                        <img className='min-w-full min-h-full object-cover' src={"/assets/img/" + data.image_url} alt={"Banner of " + data.alt} />
                    </Link>
                </div>
                <div className='mt-4 lg:mt-0 lg:w-2/3'>
                    <Link to={"/categories/" + data.Categories.id} className='text-xs text-white bg-green rounded px-2 py-0.5'>{data.Categories.name}</Link>
                    <h1 className='mt-2 text-xl font-semibold leading-7'><Link to={"/categories/" + data.Categories.id + "/" + data.id}>{data.title}</Link></h1>
                    <div className='mt-2 flex flex-row items-center gap-3 text-base font-normal text-grey'>
                        <span>{data.Users.name}</span>
                        <span>|</span>
                        <IoCalendarClear/> 
                        <span>{moment(data.created_at).format('DD MMMM YYYY')}</span>
                    </div>
                    <p className='mt-1 text-base font-normal text-grey'>{data.excerpt}</p>
                </div>
            </div>
        </>
    );
};

export default CategorySearchResult;