import React from "react";

function Nav({ setCurrentPage }) {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a
            data-testid="about"
            href="#about"
            onClick={() => setCurrentPage("About Me")}
          >
            About Me
          </a>
        </li>
        <li className="mx-2">
          <a
            data-testid="about"
            href="#about"
            onClick={() => setCurrentPage("Projects")}
          >
            Projects
          </a>
        </li>
        <li className="mx-2">
          <a
            data-testid="about"
            href="#about"
            onClick={() => setCurrentPage("Resume")}
          >
            Resume
          </a>
        </li>
        <li className="mx-2">
          <a
            data-testid="about"
            href="#about"
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
