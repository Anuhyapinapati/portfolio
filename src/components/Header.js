import React, { useState, useEffect } from "react";


export default function Header() {
  const [hidden, setHidden] = useState(false);
  let lastScroll = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setHidden(true); // scrolling down → hide
      } else {
        setHidden(false); // scrolling up → show
      }
      lastScroll = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${hidden ? "hidden" : ""}`}>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://github.com/Anuhyapinapati" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
