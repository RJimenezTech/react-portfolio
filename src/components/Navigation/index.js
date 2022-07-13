import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a data-testid="about" href="#about">
            About me
          </a>
        </li>
        <li className="mx-2">
          <a data-testid="contact" href="#contact">
            Contact
          </a>
        </li>
        <li className="mx-2">
          <a data-testid="projects" href="#projects">
            Projects
          </a>
        </li>
        <li className="mx-2">
          <a data-testid="resume" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
