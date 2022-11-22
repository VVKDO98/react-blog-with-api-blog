import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Category from "./components/Category";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom';
import Error404 from "./components/Error404";
import ReadArticle from "./components/ReadArticle";

function App() {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/categories/:id" element={<Category/>}/>
                <Route path="/categories/:id/:id" element={<ReadArticle/>}/>
                {/* <Route path="/article/:id" element={<ReadArticle/>}/> */}
                <Route path="/*" element={<Error404/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
