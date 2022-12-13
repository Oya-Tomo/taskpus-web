import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Task from "./pages/task/Task";
import About from "./pages/about/About";
import Manage from "./pages/manage/Manage";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/home" element={<Navigate replace to="/" />} />
                <Route
                    path="/index.html"
                    element={<Navigate replace to="/" />}
                />
                <Route path="/task" element={<Task />} />
                <Route path="/manage" element={<Manage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
