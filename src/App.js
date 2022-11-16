import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/category" element={<Category/>} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
