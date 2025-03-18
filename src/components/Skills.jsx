import React, { useEffect } from "react";
import Container from "./container";

const Skills = () => {
  // Scroll to section with improved implementation
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Add a small delay to ensure DOM is fully rendered
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Handle initial scroll if URL has a hash
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <div>
      <div className="w-full pb-10">
        <div className="flex flex-col gap-6 items-center">
          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => scrollToSection("programming-skill")}
              className="px-5 py-2.5 bg-[#b956ae] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Programming Skill
            </button>
            <button
              onClick={() => scrollToSection("relevant-coursework")}
              className="px-5 py-2.5 bg-[#60a5fa] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Relevant Coursework
            </button>
            <button
              onClick={() => scrollToSection("database")}
              className="px-5 py-2.5 bg-[#18db4f] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Database
            </button>
            <button
              onClick={() => scrollToSection("platforms")}
              className="px-5 py-2.5 bg-[#d43d7a] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Platforms
            </button>
          </div>

          {/* Technical Skills */}
          <div id="programming-skill">
            <Container>
              <h1 className="text-2xl font-bold text-gray-800 text-center">
                &nbsp;&nbsp;Programming Skills&nbsp;&nbsp;
              </h1>

              <ul>
                <li>C++</li>
                <li>SQL</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML/CSS/Tailwindcss</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>Redis</li>
                <li>Python</li>
                <li>Node.js</li>
                <li>C</li>
              </ul>
            </Container>
          </div>

          {/* Coursework */}
          <div id="relevant-coursework">
            <Container>
              <h1 className="text-2xl font-bold text-gray-800 text-center">
                Relevant Coursework
              </h1>

              <ul>
                <li>Computer Algorithms</li>
                <li>Data Structure</li>
                <li>C++</li>
                <li>Computer Organization</li>
                <li>NoSQL</li>
                <li>Software Engineering</li>
              </ul>
            </Container>
          </div>

          {/* Database Skills */}
          <div id="database">
            <Container>
              <h1 className="text-2xl font-bold text-gray-800 text-center">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Database &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h1>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Computer Organization</li>
                <li>Oracle</li>
              </ul>
            </Container>
          </div>

          {/* Platform */}
          <div id="platforms">
            <Container>
              <h1 className="text-2xl font-bold text-gray-800 text-center">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Platforms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h1>

              <ul>
                <li>Linux</li>
                <li>Tableau</li>
                <li>Visual Studio Code</li>
                <li>GitHub</li>
                <li>Render</li>
                <li>Vercel</li>
              </ul>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
