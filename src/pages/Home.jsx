import React from "react";
import { Menu, X } from "lucide-react";
import {
  About,
  ContactMe,
  Experience,
  Project,
  Education,
} from "../components/index";

// Component for each content section
const ContentSection = ({ section }) => {
  switch (section) {
    case "about":
      return (
        <div>
          <About />
        </div>
      );
    case "education":
      return (
        <div>
          <Education />
        </div>
      );
    case "experience":
      return (
        <div>
          <Experience />
        </div>
      );
    case "projects":
      return (
        <div>
          <Project />
        </div>
      );
    case "contact":
      return (
        <div>
          <ContactMe />
        </div>
      );
    default:
      return (
        <div>
          <About />
        </div>
      );
  }
};

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-10">
      {/* Div for Links and stuff */}
      <div></div>
      {/* Quick Intro */}
      <div></div>
    </div>
  );
};

export default Home;
