import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/Robot2.jpg';

const About = () => {
  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-[#BAE0F3] text-textDark"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-12">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            {/* Greeting Animation */}
            <motion.h4
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
              style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive' }}
            >
              Welcome
            </motion.h4>

            {/* Name Animation */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            >
              I am
            </motion.h1>

            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Pallavi
            </motion.h2>

            {/* About Me Paragraph Animation */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-base sm:text-lg md:text-lg text-gray-700 mb-10 mt-8 leading-relaxed font-sans "
            >
             I am a student with hands-on experience in Python and React.js web development projects. Skilled in both front-end and back-end technologies, I also have a strong interest and specialization in Artificial Intelligence and Machine Learning. I am eager to apply my skills to real-world projects and continue growing as a developer.

            </motion.p>

            {/* Resume Button Animation */}
            <motion.a
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              href="mailto:pallavisharma1@shooliniuniversity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: '#6AB0E3',
                boxShadow: '0 0 2px #6AB0E3, 0 0 2px #6AB0E3, 0 0 40px #6AB0E3',
              }}
            >
              Let's Connect
            </motion.a>
          </div>

          {/* Right Side Image Animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-sky-400 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(106,176,227,0.5)]"
                alt="Profile"
              />
            </Tilt>
          </motion.div>
        </div>
      </section>

      {/* SVG Wave Separator */}
      <div className="w-full overflow-hidden leading-none">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"    >
        <path fill="#BAE0F3" fill-opacity="1" d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,192C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      
      </div>
    </>
  );
};

export default About;
