import React from "react";
import Hotsports from "../components/Hotsports";
import ExperienceBox from "../components/ ExperienceBox";
import Strength from "../components/Strength";
import JobTimeline from "../components/JobTimeline";
import ProjectShowcase from "../components/ProjectShowcase";
import EducationTimeline from "../components/EducationTimeline";
import Card from "../components/Card";
import RecommendationCarousel from "../components/RecommendationCarousel";



function Home() {
  return (
    <div className="mainBody">
      <Hotsports />
      <ExperienceBox />
      <JobTimeline />
      <Card />
      <Strength />
      <ProjectShowcase />
      <EducationTimeline />
      <RecommendationCarousel />
    
    </div>
  );
}

export default Home;
