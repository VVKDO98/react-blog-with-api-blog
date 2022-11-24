import React from 'react';
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import DashboardMenu from '../components/DashboardMenu';
import DashboardContent from '../components/DashboardContent';

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
        <>
            <div className='grid grid-cols-6 h-screen font-roboto'>
                <DashboardMenu/>
                <DashboardContent/>
            </div>
        </>
    );
};

export default Dashboard;