import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import FetchPosts from "../hooks/FetchPosts";
import { Helmet } from "react-helmet";


const Home = () => {
    const {loading, error, data} = FetchPosts();
    if (error) return <p>Loading of articles</p>;
    if (loading) return <div className="w-full h-screen flex items-center justify-center"><img src="./assets/img/spinner.svg" alt="" /></div>;
    
    console.log(data);
    
    return (
        <>
            <Helmet>
                <title>Home | Notebook</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <Hero data={data}/>
            <MainContent data={data}/>
        </>
    );
};

export default Home;
