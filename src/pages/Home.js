import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
// import MainContent from "../components/MainContent";
import {supabase} from "../supabaseClient"


const Home = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchPosts = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('Posts')
                .select('*, Categories(*), Users(*)')
            
            if(error){
                setPosts(null);
                setLoading(true)
            };

            if(data){
                setPosts(data);
                setLoading(false)
            };
        };
        fetchPosts();
    }, []);

    if (loading) return <p>Loading of articles</p>;
    
    console.log(posts);
    
    return (
        <>
            <Hero data={posts}/>
            {/* <MainContent data={data}/> */}
        </>
    );
};

export default Home;
