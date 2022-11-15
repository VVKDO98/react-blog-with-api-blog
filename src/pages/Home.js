import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import {supabase} from "../supabaseClient"


const Home = () => {
    const [fetchError, setFetchError] = useState();
    const [posts, setPosts] = useState();

    

    useEffect(() => {
        async function fetchPosts() {
        const {data: posts} = await supabase.from('Posts').select('title');
        setPosts(posts);
        console.log(posts);
    }
    fetchPosts()
    }, [])

    return (
        <>
            {/* <Hero data={data}/>
            <MainContent data={data}/> */}
        </>
    );
};

export default Home;
