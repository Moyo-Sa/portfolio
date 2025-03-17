import React from "react";

const About = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12">
      <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center max-w-lg text-center">
        {/* Profile Image */}
        <img
          src="/src/images/moyo.jpeg"
          alt="Moyo"
          className="w-32 h-32 rounded-full shadow-md mb-4 object-cover"
        />
        {/* About Text */}
        <h1 className="text-3xl font-bold text-gray-800">Hi, I'm Moyo!</h1>
        <p className="text-gray-600 mt-2 leading-relaxed">
          I am a detail-oriented MSc in Computer Science student at Fordham
          University with a strong background in full-stack development, data
          analysis, and user experience research. I specialize in building
          scalable web applications, including e-commerce platforms and AI-based
          tools. I also leverage data-driven decision-making to create impactful
          digital experiences.
        </p>
        &nbsp;
        {/* Contact or CTA */}
        <button className="px-5 py-2.5 bg-[#740b72] text-white text-sm font-medium rounded-lg transition-all duration-200 ease-in-out hover:bg-[#bb5ae8] focus:ring-4 focus:ring-[#4649ff]">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default About;
