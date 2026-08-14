"use client";

import { useState } from "react";
import { ChevronDown, GitCommitHorizontal } from "lucide-react";
import { experience } from "../../data/experience";

export function ExperienceApp() {
  const [expanded, setExpanded] = useState(0);
  return (
    <div className="experience-app">
      <div className="app-intro"><p className="path-label">git log --career</p><h2>Career history</h2><p>A professional changelog of the teams, systems, and products I&apos;ve contributed to.</p></div>
      <div className="timeline">
        {experience.map((item, index) => (
          <article key={item.version} className={expanded === index ? "expanded" : ""}>
            <div className="timeline-node"><GitCommitHorizontal /></div>
            <button onClick={() => setExpanded(expanded === index ? -1 : index)} aria-expanded={expanded === index}>
              <span className="version">{item.version}</span>
              <span className="experience-main"><b>{item.role}</b><small>{item.company}</small></span>
              <span className="experience-date">{item.dates}</span><ChevronDown />
            </button>
            {expanded === index && <div className="experience-details"><div className="experience-meta"><span>{item.location}</span><span>•</span><span>{item.summary}</span></div><ul>{item.accomplishments.map((point) => <li key={point}>{point}</li>)}</ul></div>}
          </article>
        ))}
      </div>
    </div>
  );
}
