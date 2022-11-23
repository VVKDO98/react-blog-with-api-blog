import React from 'react';
import { useState } from 'react'
import Layout from '../components/Layout';
import { useAuth } from '../hooks/authProvider';

export default function Auth() {
    const auth = useAuth();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const signInWithEmail = async (e) => {
        e.preventDefault();

        const signIn = await auth.login(email);

        if(signIn.error){
            setMessage(signIn.error.message)
        } else{
            setMessage("Login link has been sent.")
        }
        setEmail("")
    }

    return (
        <Layout>
            <div className='py-10 w-4/5 h-[600px] mx-auto flex flex-col justify-center items-center'>
                <h1 className='mb-5 text-3xl font-semibold'>Login</h1>
                {message && message}
                <input className='mb-5 w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                <button className='w-full h-10 bg-green rounded text-center text-white font-semibold lg:w-1/2' onClick={signInWithEmail}>Login</button>
            </div>
        </Layout>
    )
}