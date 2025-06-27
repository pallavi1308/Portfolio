import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "../../App.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);


  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2}
    );

    ["home", "about", "skills", "work"].forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        sectionRefs.current[id] = section;
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Object.values(sectionRefs.current).forEach((section) =>
        observer.unobserve(section)
      );
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
  ];

  return (
  <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""} transition-colors duration-500 bg-skyBlue`}>
  <div className="navbar-container">
        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon">
          {isOpen ? (
            <FiX className="menu-icon" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="menu-icon" onClick={() => setIsOpen(true)} />
          )}
        </div>

        {/* Logo */}
        <div className="navbar-logo">
          <p>Portfolio</p>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`navbar-item ${activeSection === item.id ? "active" : ""}`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="theme-toggle ml-4 cursor-pointer" onClick={toggleTheme}>
          {isDarkMode ? (
            <FiSun className="text-2xl text-white" />
          ) : (
            <FiMoon className="text-2xl text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu with Slide Animation and Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
            >
              <ul className="mobile-menu-items">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`mobile-menu-item ${activeSection === item.id ? "active" : ""}`}
                  >
                    <button onClick={() => handleMenuItemClick(item.id)}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="fab" onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? <FiX className="text-2xl text-white" /> : <FiMenu className="text-2xl text-white" />}
</div>
{/* <div>
        {isAdmin ? (
          <>
            <Link to="/admin-panel" className="mr-4">Admin Panel</Link>
            <button onClick={logout} className="bg-white text-purple-600 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <Link to="/admin-login" className="bg-white text-purple-600 px-3 py-1 rounded">Admin</Link>
        )}
      </div> */}
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
