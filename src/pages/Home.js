import React from "react";
import RecentPosts from "../components/RecentPosts";
import useFetch from "../hooks/useFetch";


const Home = () => {
    //const url_base = "https://api-blog-janh.onrender.com/";
    const url_base = "http://localhost:3000/posts";
    const { loading, error, data } = useFetch(url_base + "posts");

    if (loading) return <p>Loading of articles</p>;
    if (error) return <p>Unable to load articles</p>;

    console.log(data);

    return (
        <div id="homepage">
            <h2>Recently Posted</h2>
            <div id="recentActicles">
                {data.map(data => <RecentPosts data={data}/>)}
            </div>
        </div>
    );
};

export default Home;
