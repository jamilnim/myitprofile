import React from "react";
import "./ProjectShowcase.css";

const projects = [
  {
    image: "https://via.placeholder.com/300x180/000000/FFFFFF?text=Project+1",
    name: "E-Commerce Platform",
    date: "Jan 2023 – May 2023",
    position: "Frontend Lead",
    summary: "Built a scalable e-commerce front-end with real-time cart and checkout features.",
  },
  {
    image: "https://via.placeholder.com/300x180/000000/FFFFFF?text=Project+2",
    name: "HR Management System",
    date: "Sep 2022 – Dec 2022",
    position: "Full Stack Developer",
    summary: "Designed and deployed a complete HR solution including payroll and leave management.",
  },
  {
    image: "https://via.placeholder.com/300x180/000000/FFFFFF?text=Project+3",
    name: "Portfolio Website",
    date: "Jun 2022 – Jul 2022",
    position: "UI/UX Designer",
    summary: "Crafted a responsive portfolio with animations and project showcases using React and GSAP.",
  },
  {
    image: "https://via.placeholder.com/300x180/000000/FFFFFF?text=Project+4",
    name: "AI Chatbot Integration",
    date: "Feb 2022 – May 2022",
    position: "Backend Engineer",
    summary: "Developed a banking chatbot using NLP that automated 40% of customer queries.",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="project-section">
      <h2 className="project-heading">Project Showcase</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-date">{project.date}</p>
              <p className="project-position">{project.position}</p>
            </div>
            <button>Know More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
