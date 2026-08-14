"use client";

import { useState } from "react";
import { projects, type Project } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectDetails } from "../projects/ProjectDetails";

export function ProjectsApp() {
  const [selected, setSelected] = useState<Project | null>(null);
  if (selected) return <ProjectDetails project={selected} onBack={() => setSelected(null)} />;
  return (
    <div className="projects-app">
      <div className="app-intro"><p className="path-label">~/portfolio/projects</p><h2>Selected work</h2><p>Public projects spanning desktop software, game systems, machine learning, and product interface design.</p></div>
      <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} onSelect={() => setSelected(project)} />)}</div>
    </div>
  );
}
