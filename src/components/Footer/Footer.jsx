import React from "react";

const Footer = () => {
  const socialIcons = [
    { src: "linkedin.png", alt: "LinkedIn", link: "https://linkedin.com" },
    { src: "outlook.png", alt: "Outlook", link: "mailto:pallavisharma1@shooliniuniversity.com" },
    { src: "github.png", alt: "Twitter", link: "https://github.com/pallavi1308" },
  
  ];

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#111827]">
      
      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center space-x-10 mt-8">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:-rotate-6 transition-transform duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-6 h-6 sm:w-8 sm:h-8 filter-white"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
