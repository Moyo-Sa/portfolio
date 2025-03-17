import React from "react";
import Container from "./container";

const Experience = () => {
  return (
    <div className="w-full pb-10">
      <div className="text-center text-2xl font-bold mb-6">Experience</div>
      <div className="flex flex-col gap-6 items-center">
        {/* TA position */}
        <Container>
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Teaching Assistant / Tutor
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Institution:</span> Fordham University
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Location:</span> New York, NY
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Duration:</span> August 2024 - present
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Description:</span> I work as a Teaching
            Assistant (TA) in the Computer Science Department to courses such as
            Computer Science I and Computer Organization. As the TA, I attend
            classes and assist the professor with their lecture. Additionally, I
            grade the students quizzes and assignments and host weekly office
            hours to provide personalized support to students. I also support
            students in debugging code, math problems, and solving technical
            issues during practical lab sessions, office hours, and their visit
            to the tutor room.
          </p>
        </Container>

        {/* CS Intern position */}
        <Container>
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Software Engineer Intern
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Institution:</span> Cloud Technology Hub
            Limited
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Location:</span> Remote
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Duration:</span> May 2024 - August 2024
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Description:</span> I work as a Tutor in
            the Computer Science Department. I provide support to students in
            debugging code, solving technical issues, and math problems during
            their visit to the tutor room.
          </p>
        </Container>

        {/* Meta position */}
        <Container>
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            User Experience Researcher
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Institution:</span> Meta
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Location:</span> New York, NY
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Duration:</span> March 2023 - July 2023
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Description:</span> I work as a Tutor in
            the Computer Science Department. I provide support to students in
            debugging code, solving technical issues, and math problems during
            their visit to the tutor room.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
