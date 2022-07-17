import React from "react";

function Nav({ setCurrentPage }) {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a
            href="#about"
            onClick={() => setCurrentPage("About Me")}
            className="main-link"
          >
            About Me
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#projects"
            onClick={() => setCurrentPage("Projects")}
            className="main-link"
          >
            Projects
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#resume"
            onClick={() => setCurrentPage("Resume")}
            className="main-link"
          >
            Resume
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#contact"
            onClick={() => setCurrentPage("Contact Me")}
            className="main-link"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
