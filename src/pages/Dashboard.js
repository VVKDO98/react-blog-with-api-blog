import React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { supabase } from '../supabaseClient';

const Dashboard = () => {
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [body, setBody] = useState('');
    const [image_url, setImage_url] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [user_id, setUser_id] = useState('');
    const [alt, setAlt] = useState('');

    const insertPost = async (e) => {
        e.preventDefault();
        const { error } = await supabase
        .from('Posts')
        .insert([{ title: title, excerpt: excerpt, body: body, image_url: image_url, category_id: category_id, user_id: user_id, alt: alt }])

        if(error){
            console.log(error.message);
        }
    }

    return (
        <Layout>
            <div className='py-10 w-4/5 mx-auto flex flex-col justify-center items-center'>
                <h1 className='mb-5 text-3xl font-semibold'>Add a new post</h1>
                <input className='w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/><br />
                <input className='w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="text" placeholder='Excerpt' onChange={(e) => setExcerpt(e.target.value)}/><br />
                <textarea className='w-full h-40 bg-bannercolor rounded text-center text-grey resize-none lg:w-1/2' type="text" placeholder='Body' onChange={(e) => setBody(e.target.value)}/><br />
                <input className='w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="text" placeholder='image.jpg' onChange={(e) => setImage_url(e.target.value)}/><br />
                <input className='w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="number" placeholder='Category ID' onChange={(e) => setCategory_id(e.target.value)}/><br />
                <input className='w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="number" placeholder='User ID' onChange={(e) => setUser_id(e.target.value)}/><br />
                <input className='w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="text" placeholder='Alt' onChange={(e) => setAlt(e.target.value)}/>
                <button className='mt-5 w-full h-10 bg-green rounded text-center text-white font-semibold lg:w-1/2' onClick={insertPost}>Submit</button>
            </div>
        </Layout>
    );
};

export default Dashboard;