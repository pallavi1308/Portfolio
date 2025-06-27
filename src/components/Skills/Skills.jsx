import React, { useState, useEffect, useRef } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { Search, X } from "lucide-react";

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Search skills...");
  const inputRef = useRef(null);

  // Allow ESC to clear search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchTerm("");
        inputRef.current.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Typing animation for placeholder
  useEffect(() => {
    const messages = ["Search skills...", "Try 'C++'", "Try 'MongoDB'", "Try 'Python'"];
    let index = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < messages[index].length) {
        setPlaceholder(messages[index].substring(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          charIndex = 0;
          index = (index + 1) % messages.length;
        }, 1500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredSkillsInfo = SkillsInfo.map((category) => ({
    ...category,
    skills: category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm)
    ),
  })).filter((category) => category.skills.length > 0);

  return (
    <>
      {/* Wave Separator Above Skills */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#e5f5fa"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,192C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#e5f5fa] clip-path-custom"
      >
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-[300px] max-w-[80%] transition-all duration-300 group">
            {/* Search Icon */}
            <Search className="absolute left-3 top-1/3 transform -translate-y-1/2 text-black-500 group-focus-within:text-[#8245ec]" size={20} />

            {/* Search Input */}
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8245ec] bg-white/80 text-black-500 transition-all duration-300 shadow-md hover:shadow-lg focus:shadow-[0_0_15px_rgba(130,69,236,0.6)]"
            />

            {/* Clear Button */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                aria-label="Clear Search"
              >
                <X size={20} />
              </button>
            )}

            {/* Helper Text */}
            <div className="text-xs text-gray-400 mt-2 text-center animate-pulse">
              {searchTerm ? "Press ESC to clear search" : "Try searching: Python, C++, MongoDB..."}
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
          {filteredSkillsInfo.length > 0 ? (
            filteredSkillsInfo.map((category) => (
              <div
                key={category.title}
                className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_30px_3px_rgba(130,69,236,0.4)] hover:shadow-[0_0_40px_5px_rgba(130,69,236,0.6)] transition-all duration-500"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                  {category.title}
                </h3>

                <Tilt
                  key={category.title}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className="flex flex-wrap gap-4 w-full justify-start">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center bg-transparent border-2 border-gray-700 rounded-3xl px-4 py-2 cursor-pointer hover:bg-[#8245ec] hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                      >
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                        />
                        <span className="text-xs sm:text-sm text-gray-300 hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Tilt>
              </div>
            ))
          ) : (
            <div className="text-center w-full text-gray-400 font-semibold">
              No matching skills found.
            </div>
          )}
        </div>
      </section>
      {/* Wave Below Skills */}
      {/* <div className="w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#BAE0F3"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,192C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div> */}
    </>
  );
};
      

export default Skills;
