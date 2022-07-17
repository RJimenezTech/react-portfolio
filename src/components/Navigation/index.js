import React from "react";

function Nav({ setCurrentPage }) {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a
            href="#about"
            onClick={() => setCurrentPage("About Me")}
          >
            About Me
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#projects"
            onClick={() => setCurrentPage("Projects")}
          >
            Projects
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#resume"
            onClick={() => setCurrentPage("Resume")}
          >
            Resume
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#contact"
            onClick={() => setCurrentPage("Contact Me")}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
