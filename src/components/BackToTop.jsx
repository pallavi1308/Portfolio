import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import '../App.css'; // Adjust path if needed

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button className="back-to-top" onClick={scrollToTop}>
        <FiArrowUp />
      </button>
    )
  );
};

export default BackToTop;
