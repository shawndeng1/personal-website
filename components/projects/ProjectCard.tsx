import { ArrowUpRight, GitFork as Github } from "lucide-react";
import type { Project } from "../../data/projects";

export function ProjectCard({ project, onSelect }: { project: Project; onSelect: () => void }) {
  return (
    <article className="project-card">
      <button className={`project-visual ${project.accent}`} onClick={onSelect} aria-label={`View ${project.name} details`}>
        <div className="visual-top"><span>~/repos/{project.slug}</span><span>main</span></div>
        <div className="visual-window">
          <div className="visual-sidebar"><i /><i /><i /><i /></div>
          <div className="visual-code"><b /><i /><i /><b /><i /><i /><i /></div>
          <div className="visual-panel"><span>{project.name.slice(0, 1)}</span><small>running</small></div>
        </div>
      </button>
      <div className="project-info">
        <div className="project-heading"><div><small>{project.label}</small><h3>{project.name}</h3></div><button onClick={onSelect} aria-label={`Open ${project.name}`}><ArrowUpRight /></button></div>
        <p>{project.description}</p>
        <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="repo-meta"><Github /> <span>public repository</span><i /> <span>featured</span></div>
      </div>
    </article>
  );
}
