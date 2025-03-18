import React from "react";

const Education = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12">
      <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center max-w-lg text-center">
        {/* Flex container for title and image */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Postgraduate Education
          </h1>
          <img
            src="src/images/fordham.png"
            alt="Fordham"
            className="w-16 h-16 rounded-full shadow-md object-cover"
          />
        </div>

        <p className="text-gray-600 mt-2 leading-relaxed">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="font-bold">Degree:</span> Master of Science in
          Computer
          Science&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">Institution:</span> Fordham University
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">GPA:</span> 3.94
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">Expected Graduation:</span> December 2025
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">Location:</span> New York, NY
        </p>
      </div>

      <div className="mt-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center max-w-lg text-center">
        {/* Flex container for title and image */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Undergraduate Education
          </h1>
          <img
            src="src/images/cow.png"
            alt="CoW"
            className="w-16 h-16 rounded-full shadow-md object-cover"
          />
        </div>

        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">Degree:</span> Bachelor of Arts in
          Biochemistry and Molecular Biology
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">Institution:</span> The College of Wooster
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">GPA:</span> 3.72
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">Graduation:</span> May 2020
        </p>
        <p className="text-gray-600 mt-2 leading-relaxed">
          <span className="font-bold">Location:</span> Wooster, OH
        </p>
      </div>
    </div>
  );
};

export default Education;
