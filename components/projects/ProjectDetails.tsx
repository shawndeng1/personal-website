import { ArrowLeft, ExternalLink, GitFork as Github } from "lucide-react";
import type { Project } from "../../data/projects";

export function ProjectDetails({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <article className="project-details">
      <button className="text-button" onClick={onBack}><ArrowLeft /> All projects</button>
      <div className="readme-header">
        <div><p className="path-label">{project.slug} / README.md</p><h2>{project.name}</h2><p>{project.label}</p></div>
        {(project.github || project.demo) && <div className="detail-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github /> Code</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink /> Live demo</a>}</div>}
      </div>
      <div className="readme-layout">
        <aside><b>ON THIS PAGE</b>{["Overview","Problem","Architecture","Technologies","Challenges","Results"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</aside>
        <div className="readme-body">
          <section id="overview"><h3>Overview</h3><p>{project.description}</p></section>
          <section id="problem"><h3>Problem</h3><p>{project.problem}</p></section>
          <section id="architecture"><h3>Architecture</h3><p>{project.architecture}</p><pre><code>client → API gateway → workers{`\n`}                 ↘ data + cache</code></pre></section>
          <section id="technologies"><h3>Technologies</h3><div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></section>
          <section id="challenges"><h3>Challenges</h3><ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section id="results"><h3>Results</h3><ul className="result-list">{project.results.map((item) => <li key={item}>{item}</li>)}</ul></section>
        </div>
      </div>
    </article>
  );
}
