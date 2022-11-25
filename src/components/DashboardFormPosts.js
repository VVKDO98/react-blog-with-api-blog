import React from 'react';
import { useState } from 'react';
import { supabase } from '../supabaseClient';

const DashboardFormPosts = () => {
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
        .insert([{ title: title, excerpt: excerpt, body: body, image_url: image_url, category_id: category_id, user_id: user_id, alt: alt }]);

        setTitle("");
        setExcerpt("");
        setBody("");
        setImage_url("");
        setCategory_id("");
        setUser_id("");
        setAlt("");

        if(error){
            console.log(error.message);
        }
    }
    return (
        <div className='p-8 w-full bg-white rounded-lg'>
            <div className='w-full h-full'>
                <h2 className='w-full mb-5 text-2xl text-center font-semibold'>Add a new post</h2>
                <input className='w-full h-10 px-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/><br />
                <input className='w-full h-10 px-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='Excerpt' onChange={(e) => setExcerpt(e.target.value)}/><br />
                <textarea className='w-full h-10 px-5 pt-2 mb-4 rounded-sm bg-bgdash' type="text" placeholder='Body' onChange={(e) => setBody(e.target.value)}/><br />
                <div className='w-full flex flex-row items-start gap-2'>
                    <input className='w-1/2 h-10 px-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='image.jpg' onChange={(e) => setImage_url(e.target.value)}/><br />
                    <input className='w-1/2 h-10 px-5 mb-4 rounded-sm bg-bgdash' type="text" placeholder='Alt' onChange={(e) => setAlt(e.target.value)}/>
                </div>
                <div className='w-full flex flex-row items-start gap-4'>
                    <select className='w-1/2 h-10 px-5 mb-4 rounded-sm bg-bgdash' onChange={(e) => setCategory_id(e.target.value)}>
                        <option value="">-- Choose a Category --</option>
                        <option value="1">Travel</option>
                        <option value="2">Food</option>
                        <option value="3">Technology</option>
                        <option value="4">Lifestyle</option>
                        <option value="5">Healthcare</option>
                    </select>
                    <select className='w-1/2 h-10 px-5 mb-4 rounded-sm bg-bgdash' onChange={(e) => setUser_id(e.target.value)}>
                        <option value="1">VVKDO</option>
                    </select>
                    {/* <input className='w-1/2 h-10 px-5 mb-4 rounded-sm bg-bgdash' type="number" placeholder='Category ID' onChange={(e) => setCategory_id(e.target.value)}/><br />
                    <input className='w-1/2 h-10 px-5 mb-4 rounded-sm bg-bgdash' type="number" placeholder='User ID' onChange={(e) => setUser_id(e.target.value)}/><br /> */}
                </div>
                <button className='w-full h-10 px-5 bg-b rounded-sm bg-blue text-white' onClick={insertPost}>Submit</button>
            </div>
        </div>
    );
};

export default DashboardFormPosts;