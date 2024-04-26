import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Home";
import Login from "./login";
import Forum from "./forum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
