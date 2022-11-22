import React from 'react';
import { IoCalendarClear } from "react-icons/io5";
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import ArticleSocial from './ArticleSocial';
import { Helmet } from 'react-helmet';

const ArticleContent = ({data}) => {
    const post = data[0];
    
    return (
        <>
            <Helmet>
                <title>{post.title} | Notebook</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <div className='w-full lg:w-4/6 lg:m-0'>
                <Link to={"/categories/" + post.Categories.id} className=' text-xs text-white bg-green rounded px-2 py-0.5'>{post.Categories.name}</Link>
                <h1 className='mt-4 text-2xl font-semibold'>{post.title}</h1>
                <div className='mt-4 flex flex-row items-center gap-3 text-base font-normal text-grey'>
                    <span>{post.Users.name}</span>
                    <span>|</span>
                    <IoCalendarClear/> 
                    <span>{moment(post.created_at).format('DD MMMM YYYY')}</span>
                </div>
                <div className='my-7 w-full h-52 rounded-lg flex justify-center items-center overflow-hidden lg:h-64 xl:h-96'>
                    <img className='min-w-full min-h-full object-cover' src={`/assets/img/` + post.image_url} alt={post.image_url} />
                </div>
                <p className='text-base text-grey text-justify font-normal'>{post.body}</p>
                <ArticleSocial/>
            </div>
        </>
    );
};

export default ArticleContent;