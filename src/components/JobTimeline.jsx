import React, { useState } from "react";
import "./JobTimeline.css";
import jobprofileimage from "../assets/background/jobprofileimage.jpg";

const jobHistory = [
  {
    title: "Global Product Developer",
    company: "PULS Trading Far East Ltd. (H&M)",
    period: "Sep 2019 – Aug 2023",
    highlights: [
      "Managed 15M trousers and 25M units annually",
      "Led strategic supplier relationships",
      "Drove product innovation via market research",
    ],
  },
  {
    title: "Senior Merchandiser",
    company: "H&M, Dhaka",
    period: "Sep 2019 – Dec 2020",
    highlights: [
      "Oversaw 25M unit product line",
      "Led 8–10 member team",
      "Directed sourcing and approvals",
    ],
  },
  {
    title: "Product Merchandiser",
    company: "H&M, Dhaka",
    period: "Mar 2013 – Aug 2019",
    highlights: [
      "Managed 10–12M seasonal units",
      "Led end-to-end product cycle",
      "Trained teams on OFS & Castor systems",
    ],
  },
  {
    title: "Assistant Manager",
    company: "ITPS, Dhaka",
    period: "Jan 2009 – Mar 2013",
    highlights: [
      "Handled Italian accounts",
      "Managed 19-member product team",
      "Oversaw sweaters, knits, and wovens",
    ],
  },
];

function JobTimeline() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % jobHistory.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + jobHistory.length) % jobHistory.length);

  const current = jobHistory[index];

  return (
    <section className="job-timeline">
      <h2 className="timeline-heading"> Job Profile</h2>

      <div className="timeline-wrapper">
        <div className="timeline-image">
          <div className="image-placeholder">
            <img
              className="jobprofileImg"
              src={jobprofileimage}
              alt="jobprofileimage"
            />
          </div>
        </div>

        <div className="timeline-content">
          <div className="job-card">
            <div className="job-header">
              <h3>{current.title}</h3>
              <p className="company">{current.company}</p>
              <p className="period">{current.period}</p>
            </div>
            <ul className="job-highlights">
              {current.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="timeline-controls">
            <button onClick={prev}>&lt;</button>
            <button onClick={next}>&gt;</button>
          </div>
        </div>
        <button className="knowmoreBtn">More</button>
      </div>
    </section>
  );
}

export default JobTimeline;
