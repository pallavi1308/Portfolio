import React from "react";
import "../../App.css";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section ">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-description">
          I am a student with hands-on experience in Python and React.js web development projects. Skilled in both front-end and back-end technologies, I also have a strong interest and specialization in Artificial Intelligence and Machine Learning. I am eager to apply my skills to real-world projects and continue growing as a developer.
          </p>
          <a
            href="" 
            download
            className="resume-button"
          >
            Download Resume
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default About;
