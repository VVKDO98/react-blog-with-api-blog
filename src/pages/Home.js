import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import {supabase} from "../supabaseClient"


const Home = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try{
        let { data, error, status } = await supabase
            .from('Posts')
            .select('*');

        if (error && status !== 406) {
            throw error
        }

        if(data){
            setPosts(data)
            console.log(data);
        }
    } catch (error){
        alert(error.message)
    }
}

    // useEffect(() => {
    //     async function fetchPosts() {
    //         let { data, error } = await supabase
    //         .from('Posts')
    //         .select('*');
    //         setPosts(data);
    //     }
    //     fetchPosts()
    // }, [])

    // console.log(posts);
    
    return (
        <>
            {/* <Hero data={posts}/> */}
            {/* <MainContent data={data}/> */}
        </>
    );
};

export default Home;
