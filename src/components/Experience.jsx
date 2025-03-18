import React from "react";
import Container from "./Coontainer";

const Experience = () => {
  return (
    <div className="w-full pb-10">
      {/* <div className="text-center text-2xl font-bold mb-6">Experience</div> */}
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
            <span className="font-bold">Description: </span> I work as a
            Teaching Assistant (TA) in the Computer Science Department to
            courses such as Computer Science I and Computer Organization. As the
            TA, I attend classes and assist the professor with their lecture.
            Additionally, I grade the students quizzes and assignments and host
            weekly office hours to provide personalized support to students. I
            also support students in debugging code, math problems, and solving
            technical issues during practical lab sessions, office hours, and
            their visit to the tutor room.
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
            <span className="font-bold">Description: </span>I developed and
            implemented phishing simulation websites to assess 23 clients’ staff
            vulnerability to phishing attacks. The phishing scenarios were
            tailored to the clients’ security needs, emphasizing user awareness
            and engagement. I then analyzed the simulation results and provided
            actionable feedback to improve 23 clients’ security awareness.
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
            <span className="font-bold">Description:</span> I supervised over
            100 research participants daily across three unique AR/VR research
            projects at Meta Reality Labs department of Meta. I managed the
            deployment, installation, and troubleshooting of software and AR/VR
            devices to ensure seamless functionality and optimal performances
            based on functional requirements. Additionally, I developed detailed
            documentation of gestural inputs for neural interface devices,
            enhancing their performance.
          </p>
        </Container>

        {/* Rockefeller position */}
        <Container>
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Research Assistant
          </h1>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Institution:</span> The Rockefeller
            University
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Location:</span> New York, NY
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Duration:</span> July 2020 - February
            2023
          </p>
          <p className="text-gray-600 mt-2 leading-relaxed text-center">
            <span className="font-bold">Description:</span> I was pivotal in
            securing a $150,000 scientific grant through comprehensive data
            analysis and insightful experimental results using R and Excel. I
            efficiently managed a range of experiments and projects centered
            around E. Coli and S. aureus, optimizing workflow to meet stringent
            deadlines, and delivering impactful assessments and reports.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
