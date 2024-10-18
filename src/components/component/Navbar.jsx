import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("header nav a");

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          document
            .querySelector(`header nav a[href*=${id}]`)
            .classList.add("active");
          setActiveSection(id);
        }
      });

      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

      setIsMenuOpen(false); // Close the menu when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        Portfolio
      </a>

      <div
        id="menu-icon"
        className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} `}
        onClick={toggleMenu}
      ></div>
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Home
        </a>
        <a
          href="#about"
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          About
        </a>
        <a
          href="#skills"
          className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Skills
        </a>
        {/* <a
          href="#project"
          className={`nav-link ${activeSection === "project" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          Project
        </a> */}
        {/* Add more navbar links for each section */}
      </nav>
    </header>
  );
};

export default Navbar;
