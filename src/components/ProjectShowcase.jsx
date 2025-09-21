import React from "react";
import "./ProjectShowcase.css";

const projects = [
  {
    image:
      "https://cde.nus.edu.sg/cee/wp-content/uploads/sites/7/2022/04/Environmental-Sustainbility-Cover-image-2048x1462.jpg",
    name: "Sustainable meterial indrigity project",
    date: "Jan 2023 – May 2023",
    position: "Project lead",
    summary:
      "Ensuring material intrigity.Ensuring smooth collection of all tracibility",
  },
  {
    image:
      "https://sourceone.nazdar.com/Portals/0/EasyDNNNews/1174/images/Magna-ZDHC-600-600-p-L-97.jpg",
    name: "ZDHC implimentation Project",
    date: "Sep 2022 – Dec 2022",
    position: "Project member",
    summary: "Implimenting zero hazardous camical",
  },
  {
    image:
      "https://www.thebuildchain.co.uk/news/wp-content/uploads/2023/11/Sustainable-Materials-Sourcing-Best-Practices-for-Ethical-and-Eco-Friendly-Procurement.jpg",
    name: "Portfolio Website",
    date: "Jun 2022 – Jul 2022",
    position: "UI/UX Designer",
    summary:
      "Crafted a responsive portfolio with animations and project showcases using React and GSAP.",
  },
  {
    image:
      "https://upspir.com/wp-content/uploads/2023/06/technical-support.jpg",
    name: "AI Chatbot Integration",
    date: "Feb 2022 – May 2022",
    position: "Backend Engineer",
    summary:
      "Developed a banking chatbot using NLP that automated 40% of customer queries.",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="project-section">
      <h2 className="project-heading">Project Showcase</h2>
      <div className="project-row">
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
            <button className="project-btn">Know More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
