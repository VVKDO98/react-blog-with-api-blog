import React from 'react';
import { useState } from 'react';
import { supabase } from '../supabaseClient';

const DashboardContent = () => {
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
        <div className='col-span-5 bg-bgdash p-8'>
            <div className='p-8 w-1/2 bg-white rounded-lg'>
                <div className='w-full h-full'>
                    <h2 className='w-full mb-5 text-2xl text-center font-semibold'>Add a new post</h2>
                    <input className='w-full h-10 pl-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/><br />
                    <input className='w-full h-10 pl-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='Excerpt' onChange={(e) => setExcerpt(e.target.value)}/><br />
                    <textarea className='w-full h-10 pl-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='Body' onChange={(e) => setBody(e.target.value)}/><br />
                    <input className='w-full h-10 pl-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='image.jpg' onChange={(e) => setImage_url(e.target.value)}/><br />
                    <input className='w-full h-10 pl-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='Alt' onChange={(e) => setAlt(e.target.value)}/>
                    <input className='w-full h-10 pl-5 mb-4 rounded-sm bg-bgdash' type="number" placeholder='Category ID' onChange={(e) => setCategory_id(e.target.value)}/><br />
                    <input className='w-full h-10 pl-5 mb-4 rounded-sm bg-bgdash' type="number" placeholder='User ID' onChange={(e) => setUser_id(e.target.value)}/><br />
                    <button className='w-full h-10 pl-5 bg-b rounded-sm bg-blue text-white' onClick={insertPost}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;