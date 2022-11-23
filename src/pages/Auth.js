import React from 'react';
import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState('');
    const [session, setSession] = useState('');

    const signInWithEmail = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        }) 

        if(error){
            console.log(error.message);
        } else{
            setUser(data.user);
            setSession(data.session)
            console.log(data.session)
        }
    }
    // const Register = async (e) => {
    //     e.preventDefault()

    //     const {data, error} = await supabase.auth.signUp({
    //         email: email,
    //         password: password,
    //     })
    //     if(error){
    //         console.log(error.message)
    //     }else{
    //         setUser(data.user)
    //     }
    // }

    return (
        <div className='py-10 w-4/5 h-[600px] mx-auto flex flex-col justify-center items-center'>
            <h1 className='mb-5 text-3xl font-semibold'>Login</h1>
            <input className='mb-5 w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input className='mb-5 w-full h-10 bg-bannercolor rounded text-center text-grey lg:w-1/2' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button className='w-full h-10 bg-green rounded text-center text-white font-semibold lg:w-1/2' onClick={signInWithEmail}>Login</button>
            {/* <div className='w-full flex flex-col items-center justify-between'>
                <button className='w-1/2 h-10 bg-bannercolor rounded text-center text-grey' onClick={Register}>Register</button>
                <button className='w-full h-10 bg-green rounded text-center text-white font-semibold' onClick={signInWithEmail}>Login</button>
            </div> */}
        </div>
    )
}