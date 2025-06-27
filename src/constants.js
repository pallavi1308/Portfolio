// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import db from './assets/tech_logo/database-storage.png';
import oops from './assets/tech_logo/programing.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import os from './assets/tech_logo/operational-system.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import cn from './assets/tech_logo/networking.png';
import figmaLogo from './assets/tech_logo/figma.png';
import mcLogo from './assets/tech_logo/mc.png'
import dsa from './assets/tech_logo/hierarchical-structure.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Project Section Logo's
import portfolio from './assets/work_logo/Portfolio.png';
import ml from './assets/work_logo/Gender.png';
import weather from './assets/work_logo/Weather.png';
import search from './assets/work_logo/Search.png';
import chatbot from './assets/work_logo/Chatbot.png';
import travel from  './assets/work_logo/Travel.png';

export const SkillsInfo = [
  {
    title: 'Frontend & Backend ',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },

  {
    title: ' Programming Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'C#', logo: csharpLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
  
    ],
  },
  {
    title: 'CS Fundamentals ',
    skills: [
      { name: 'Data Structures And Algorithms', logo: dsa },
      { name: 'Computer Networks', logo: cn },
      { name: 'DBMS', logo: db },
      { name: 'Operating System', logo: os },
      { name: 'OOPS Concepts', logo: oops },
  
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const projects = [
    {
      id: 0,
      title: " Gender Detection Model",
      description:
        "Developed a machine learning model to detect gender and age from images with 90% accuracy after just 10 epochs. Focused on model optimization and efficient image data handling. Made by using  Python, TensorFlow, and OpenCV for model training and image processing.",
      image: ml,
      tags: ["Machine Learning","Deep Learning", "Python", "TensorFlow/ Keras ", "Computer Vision", "NumPy ","Pandas"],      github: "",
      github: "https://github.com/pallavi1308/Gender-Age-Detection/blob/main/GenderandAgeDetection.ipynb",
      webapp: "https://github.com/pallavi1308/Gender-Age-Detection/blob/main/GenderandAgeDetection.ipynb",

    },
    {
      id: 1,
      title: "API Based Weather Application",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: weather,
      tags: [ "Python", "OpenWeatherAPI","Streamlit"],
      github: "https://github.com/pallavi1308/Weather-Application",
      webapp: "https://weather-forecast-dashboard-app.streamlit.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Fully responsive layout for all screen sizes.Auto section detection on scroll,Interactive Projects Section with filtering by tags. Project Modal with detailed project descriptions and image previews.Skills Section have search bar filter to filter specific skills. Certifications Section with detailed certificates and clickable links. Downloadable Resume option.Animated components using Framer Motion for a dynamic user experience.",
      image: portfolio,
      tags: ["React JS", "CSS", "HTML", "Framer Motion", "JavaScript","Tailwind CSS","React Icons","React Parallax Tilt"],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Autocomplete Search Engine",
      description:
        "Developed an autocomplete search engine using the Trie data structure for efficient prefix-based word searching. Implemented in cpp, the system provides instant word suggestions as the user types, with optimized time complexity for fast lookups. Made by HTML,CSS,C++.",
      image: search,
      tags: ["HTML","CSS","Python"],
      github: "https://github.com/pallavi1308/Autocomplete-Search-Engine",
      webapp: "https://autocomplete-search-engine-11.onrender.com/",
    },
    {
      id: 4,
      title: "NLP-Based Chatbot using Knowledge Base",
      description:
        "Developed an NLP-based chatbot that provides accurate, context-aware responses using a structured knowledge base. Implemented in Python with libraries like NLTK and regular expressions for natural language understanding and pattern matching. Focused on text processing, conversational logic, and knowledge-based query handling.",
      image: chatbot,
      tags: ["NLP", "Python", "CSS"],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "Travel Website",
      description:
        "Developed and maintained an interactive travel exploration website, enabling users to discover destinations, attractions, and travel packages.Made by HTML,CSS,Javascript",
      image: travel,
      tags: ["HTML", "Javascript", "CSS"],
      github: "https://github.com/pallavi1308/Travel",
      webapp: "https://pallavi1308.github.io/Travel/",
    },
  ];  
