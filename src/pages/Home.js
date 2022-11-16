import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import FetchPosts from "../hooks/FetchPosts";


const Home = () => {
    const {loading, error, data} = FetchPosts();
    if (error) return <p>Loading of articles</p>;
    if (loading) return <p>Loading of articles</p>;
    
    console.log(data);
    
    return (
        <>
            <Hero data={data}/>
            <MainContent data={data}/>
        </>
    );
};

export default Home;
