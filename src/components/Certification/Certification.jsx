import React from "react";

const certifications = [
  {
    title: "The Python Mega Course - Build 10 Real World Applications",
    issuer: "Udemy",
    date: "Dec 2020",
    link: "https://example.com/certificate1",
    description:
      "A comprehensive course focusing on building real-world Python applications including web apps, data visualizations, and automation scripts.",
  },
  {
    title: "Programming for Everybody - Getting Started with Python",
    issuer: "Coursera",
    date: "Feb 2021",
    link: "https://example.com/certificate2",
    description:
      "An introduction to Python programming, covering the basics of syntax, functions, loops, and problem-solving for beginners.",
  },
  {
    title: "Web Application Development: Basic Concepts",
    issuer: "Coursera",
    date: "Aug 2021",
    link: "https://example.com/certificate3",
    description:
      "Explored the foundational concepts of web development including client-server architecture, HTML, CSS, and JavaScript basics.",
  },
];

const Certification = () => {
  return (
    <section id="certifications" className="cert-section">
      <h2 className="cert-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3 className="cert-name">{cert.title}</h3>
            <span className="cert-issuer">{cert.issuer}</span>
            <span className="cert-date">{cert.date}</span>
            <p className="cert-description">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
