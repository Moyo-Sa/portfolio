import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  About,
  ContactMe,
  Experience,
  Project,
  Education,
  Links,
} from "../components/index";

// Component for each content section
const ContentSection = ({ section }) => {
  switch (section) {
    case "about":
      return <About />;
    case "education":
      return <Education />;
    case "experience":
      return <Experience />;
    case "projects":
      return <Project />;
    case "contact":
      return <ContactMe />;
    case "links":
      return <Links />;
    default:
      return <About />;
  }
};

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  // Handle topbar item click
  const handleNavClick = (section, event) => {
    event.preventDefault();
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <nav className="w-full bg-[#740b72] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-center space-x-6">
          <button
            className="hover:text-gray-300 transition-all"
            onClick={(e) => handleNavClick("about", e)}
          >
            About
          </button>
          <button
            className="hover:text-gray-300 transition-all"
            onClick={(e) => handleNavClick("education", e)}
          >
            Education
          </button>
          <button
            className="hover:text-gray-300 transition-all"
            onClick={(e) => handleNavClick("experience", e)}
          >
            Experiences
          </button>
          <button
            className="hover:text-gray-300 transition-all"
            onClick={(e) => handleNavClick("projects", e)}
          >
            Projects
          </button>
          <button
            className="hover:text-gray-300 transition-all"
            onClick={(e) => handleNavClick("contact", e)}
          >
            Contact Me
          </button>
          <button
            className="hover:text-gray-300 transition-all"
            onClick={(e) => handleNavClick("links", e)}
          >
            Links
          </button>
        </div>
      </nav>

      {/* Content Section */}
      <div className="flex-grow flex items-center justify-center py-8 px-6">
        <div className="w-full max-w-4xl mx-auto">
          <ContentSection section={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default Home;
