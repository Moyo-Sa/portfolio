import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Thanks } from "./pages";
import {
  About,
  ContactMe,
  Experience,
  Project,
  Education,
  Resume,
  Research,
} from "./components";

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
            <Route path="/resume" element={<Resume />} />
            <Route path="/thank-you" element={<Thanks />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
