import React, { useState } from "react";
import "./EducationTimeline.css";

const educationHistory = [
  {
    degree: "Master in Global Business Management",
    institute: "KAMK University of Applied Sciences, Finland",
    period: "2023 – 2024",
    details: ["Thesis: Finnish fashion & textile sustainability", "GPA: 3.25"],
  },
  {
    degree: "MBA – Apparel Merchandising",
    institute: "BGMEA Institute of Fashion and Technology, Dhaka",
    period: "2009 – 2011",
    details: ["GPA: 3.74", "Thesis: Denim Manufacturing Process"],
  },
  {
    degree: "PGD – Garments Business",
    institute: "IBA, University of Dhaka",
    period: "2021 – 2022",
    details: [],
  },
  {
    degree: "B.S.S – Social Sciences",
    institute: "University of Dhaka",
    period: "1999 – 2004",
    details: [],
  },
];

function EducationTimeline() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % educationHistory.length);
  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + educationHistory.length) % educationHistory.length
    );

  const current = educationHistory[index];

  return (
    <section className="edu-section">
      <h2 className="edu-heading">Education Profile</h2>

      <div className="edu-layout">
        <div className="edu-card">
          <h3>{current.degree}</h3>
          <h4>{current.institute}</h4>
          <p className="edu-period">{current.period}</p>
          <ul>
            {current.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="edu-buttons">
          <button onClick={prev}>&lt;</button>
          <button onClick={next}>&gt;</button>
        </div>
        <div className="edu-image-box">
          <div className="edu-image">Image</div>
        </div>
      </div>
    </section>
  );
}

export default EducationTimeline;
