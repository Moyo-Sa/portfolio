import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  About,
  ContactMe,
  Experience,
  Project,
  Education,
  Links,
  Skills,
  Research,
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
    case "research":
      return <Research />;
    case "contact":
      return <ContactMe />;
    case "links":
      return <Links />;
    case "skills":
      return <Skills />;
    default:
      return <About />;
  }
};

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items array for easy mapping
  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experiences" },
    { id: "projects", label: "Projects" },
    { id: "research", label: "Research" },
    { id: "skills", label: "Skills" },
    { id: "links", label: "Links" },
    { id: "contact", label: "Contact Me" },
  ];

  // Handle topbar item click
  const handleNavClick = (section, event) => {
    event.preventDefault();
    setActiveSection(section);
    setMobileMenuOpen(false); // Close mobile menu after selection
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <nav className="w-full bg-[#740b72] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="hover:text-gray-300 transition-all"
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <button
              onClick={toggleMobileMenu}
              className="p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#740b72] mt-2 py-2 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="text-left py-2 border-b border-purple-700 hover:bg-purple-800 transition-all"
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
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
