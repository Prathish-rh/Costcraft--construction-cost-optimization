// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./components/services"; // Ensure the correct file path

function App() {
  return (
    <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} /> 
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;




