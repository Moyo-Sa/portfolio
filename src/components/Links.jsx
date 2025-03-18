import React from "react";
import Container from "./Coontainer";

const Links = () => {
  return (
    <div>
      <div className="w-full pb-10">
        {/* <div className="text-center text-2xl font-bold mb-6">Experience</div> */}
        <div className="flex flex-col gap-6 items-center">
          {/* LinkedIn */}
          <Container>
            <div>
              <p>Click this button to access my LinkedIn </p> &nbsp;
              <button className="px-5 py-2.5 bg-[#740b72] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto block">
                <a
                  href="https://www.linkedin.com/in/moyo-saliu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#740b72] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto block text-center"
                >
                  LinkedIn
                </a>
              </button>
              <div className="w-full flex justify-center mt-4">
                <img
                  src="public/images/linkedin.png"
                  alt="linkedin img"
                  className="w-full max-w-lg h-96 border rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Container>

          {/* GitHub */}
          <Container>
            <div>
              <p>To view my Github, click the button below</p> &nbsp;
              <button className="px-5 py-2.5 bg-[#740b72] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto block">
                <a
                  href="https://www.github.com/Moyo-Sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#740b72] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff] disabled:bg-gray-400 disabled:cursor-not-allowed mx-auto block text-center"
                >
                  Github
                </a>
              </button>
              <div className="w-full flex justify-center mt-4">
                <img
                  src="public/images/github.png"
                  alt="github img"
                  className="w-full max-w-lg h-96 border rounded-lg shadow-lg"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Links;
