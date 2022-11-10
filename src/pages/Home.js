import React from "react";
import Hero from "../components/Hero";
import RecentlyPosted from "../components/RecentlyPosted";
import useFetch from "../hooks/useFetch";


const Home = () => {
    //const url_base = "https://api-blog-janh.onrender.com/";
    const url_base = "http://localhost:3030/";
    const { loading, error, data } = useFetch(url_base + "posts");

    if (loading) return <p>Loading of articles</p>;
    if (error) return <p>Unable to load articles</p>;

    console.log(data);

    return (
        <>
            <Hero data={data}/>
            <div id="homepage">
                <h2>Recently Posted</h2>
                <div id="recentActicles">
                    {data.map(data => <RecentlyPosted data={data}/>)}
                </div>
            </div>
        </>
    );
};

export default Home;
