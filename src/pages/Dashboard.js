import React from 'react';
import { useState } from 'react';
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
        <div>
            <h1>Dashboard</h1>
            <input className='bg-green mb-1' type="text" onChange={(e) => setTitle(e.target.value)}/><br />
            <input className='bg-green mb-1' type="text" onChange={(e) => setExcerpt(e.target.value)}/><br />
            <input className='bg-green mb-1' type="text" onChange={(e) => setBody(e.target.value)}/><br />
            <input className='bg-green mb-1' type="text" onChange={(e) => setImage_url(e.target.value)}/><br />
            <input className='bg-green mb-1' type="number" onChange={(e) => setCategory_id(e.target.value)}/><br />
            <input className='bg-green mb-1' type="number" onChange={(e) => setUser_id(e.target.value)}/><br />
            <input className='bg-green mb-1' type="text" onChange={(e) => setAlt(e.target.value)}/>
            <button className='w-full h-10 bg-green rounded text-center text-white font-semibold lg:w-1/2' onClick={insertPost}>Login</button>
        </div>
    );
};

export default Dashboard;