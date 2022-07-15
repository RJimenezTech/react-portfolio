import React from "react";
import emailIcon from "../../assets/images/footers/email-icon.png";
import linkedInIcon from "../../assets/images/footers/linkedin-icon.png";
import gitHubIcon from "../../assets/images/footers/github-cat-icon.png";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <a
          href="mailto:RJimenezTech@gmail.com"
          className="footer-cards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={emailIcon} alt="email icon" />
          <h4>Email me</h4>
        </a>
        <a
          href="https://github.com/RJimenezTech"
          className="footer-cards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubIcon} alt="github cat icon" />
          <h4>Check my GitHub</h4>
        </a>
        <a
          href="https://linkedin.com/in/RJimenezTech"
          className="footer-cards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInIcon} alt="linked in icon" />
          <h4>Find my LinkedIn</h4>
        </a>
      </div>
    </section>
  );
}

export default Footer;
