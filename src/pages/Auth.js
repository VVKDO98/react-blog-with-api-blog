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
    const Register = async (e) => {
        e.preventDefault()

        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if(error){
            console.log(error.message)
        }else{
            setUser(data.user)
        }
    }

    return (
        <div>
            <h1>test</h1>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signInWithEmail}>Login</button>
            <button onClick={Register}>Register</button>
        </div>
    )
}