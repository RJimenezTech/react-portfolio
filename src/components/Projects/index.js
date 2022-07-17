import React from "react";
import habitualImage from "../../assets/images//projects/habitual-tracker.png";
import occasionalImage from "../../assets/images/projects/occasional-movie.png";
import quizImage from "../../assets/images/projects/js-quiz.png";
import weatherImage from "../../assets/images/projects/weather-dashboard.png";
import blogImage from "../../assets/images/projects/tech-blog.png";
import runBuddyImage from "../../assets/images/projects/run-buddy-still.jpg";

function Projects() {
const projects = [
    {
      name: "Habitual",
      link: "http://habitualtracker.herokuapp.com/",
      github: "https://github.com/RJimenezTech/habit-tracker", 
      image: habitualImage
    },    {
      name: "Tech Blog",
      link: "https://rjimeneztech-tech-blog.herokuapp.com/",
      github: "https://github.com/RJimenezTech/tech-blog", 
      image: blogImage
    },
    {
      name: "Occasional Movie",
      link: "https://rjimeneztech.github.io/MovieFinder/",
      github: "https://github.com/RJimenezTech/MovieFinder", 
      image: occasionalImage
    },
    {
      name: "JavaScript Quiz",
      link: "https://rjimeneztech.github.io/javascript-quizlet/",
      github: "https://github.com/RJimenezTech/javascript-quizlet", 
      image: quizImage
    },
    {
      name: "Weather Dashboard",
      link: "https://rjimeneztech.github.io/weather-dashboard/",
      github: "https://github.com/RJimenezTech/weather-dashboard", 
      image: weatherImage
    },

    {
      name: "Run Buddy",
      link: "https://rjimeneztech.github.io/run-buddy/",
      github: "https://github.com/RJimenezTech/run-buddy", 
      image: runBuddyImage
    },
];
 
  return (
    <section className="project-container" id="projects">
      {projects.map((project, index) => {
        return (
            <div className="project-single" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name}/>      
              </a>
              <div className="project-text-container">
                <a 
                href={project.link} 
                className="project-text" 
                target="_blank" 
                rel="noopener noreferrer">
                {project.name}
                </a>
                <a 
                href={project.github}
                className="project-text" 
                target="_blank" 
                rel="noopener noreferrer">
                  GitHub Repo
                  
                </a>
              </div>
          </div>
        )})
      }
    </section>
  );
}

export default Projects;
