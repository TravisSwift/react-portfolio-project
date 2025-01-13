import React from "react";
import "./style.css";

export default function Projects() {
  const projectList = [
    {
      title: "Simple Quiz Game",
      description: "A silly little quiz to test your developer knowledge!",
      link: "https://travisswift.github.io/new-quiz-game/"
    },
    {
      title: "To-Do App",
      description: "A simple to-do list app with React state management. This was a walkthrough project with the Univeristy of Texas boot camp desmonstrating html, css, and js.",
      link: "https://travisswift.github.io/taskmaster-pro/"
    },
    {
      title: "Weather App",
      description: "A weather forecast app using a public API.",
      link: "https://travisswift.github.io/Weather-App/"
    },
    {
        title: "SuperDoobie.com",
        description: "A full website using HTML, CSS, and JS",
        link: "https://superdoobie.com"
      },
      {
        title: "Birthday Card",
        description: "A simple, one page, birthday celebration with HTML, CSS and JS",
        link: "https://travisswift.github.io/cake_day_alex/"
      },
      
      {
        title: "Magic Item Creator",
        description: "A simple tool for DM's to create a magic item on the fly",
        link: "https://travisswift.github.io/Create-An-Item/"
      },

      {
        title: "Mock-Up Website",
        description: "A mock up wesbsite practicing html, css and js.",
        link: "https://travisswift.github.io/Create-An-Item/"
      },

      {
        title: "Coursework",
        description: "My journey through the Ancora Online Course",
        link: "https://travisswift.github.io/JWD1101/"
      },

      {
        title: "Food Festival App",
        description: "A mock-up website for a local food festival using html, css, JS, JSX, and React. This was a walkthrough project with the University of Texas boot camp.",
        link: "https://travisswift.github.io/food-festival/index.html"
      }

       
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
  
}
