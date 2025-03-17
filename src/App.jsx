import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import { About, ContactMe, Experience, Project, Education } from "./components";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
