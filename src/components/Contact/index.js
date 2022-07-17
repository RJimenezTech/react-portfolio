import React from "react";

function Contact() {
  return (
    <section className="my-5" id="contact">
      <div className="my-2">
        <h2>Contact Me</h2>

        <p>Drop me an email at <a href="mailTo:rjimeneztech@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">RJimenezTech@gmail.com</a>.</p>
        <p>Want to get to know me more?</p>
        <p>Check out my GitHub: <a href="http://github.com/RJimenezTech" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/RJimenezTech</a>.</p>
        <p>Check out my tech Twitter: <a href="https://twitter.com/rjimeneztech" target="_blank" rel="noopener noreferrer" className="contact-link">@RJimenezTech</a>.</p>
        <p>My language learning Twitter: <a href="https://twitter.com/rjimeneztech" target="_blank" rel="noopener noreferrer" className="contact-link">@language_future</a>.</p>
      </div>
    </section>
  );
}

export default Contact;
