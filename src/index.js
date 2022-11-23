import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/authProvider";
import './index.css';
import Home from "./pages/Home";
import Login from "./pages/Login"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Category from "./components/Category";
import Error404 from "./components/Error404";
import ReadArticle from "./components/ReadArticle";
import Dashboard from "./pages/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path={"dashboard2"} element={<Dashboard/>}/>
                <Route path={"dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/categories/:id" element={<Category/>}/>
                <Route path="/categories/:id/:id" element={<ReadArticle/>}/>
                <Route path="/*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);

