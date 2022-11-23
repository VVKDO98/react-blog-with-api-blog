import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/authProvider";
import './index.css';
import Dashboard from "./pages/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path={"dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            </Routes>
            <App/>
        </BrowserRouter>
    </AuthProvider>
);

