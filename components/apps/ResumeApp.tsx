import { Download, ExternalLink, GraduationCap, MapPin, Printer } from "lucide-react";
import { education, profile } from "../../data/profile";
import { experience } from "../../data/experience";
import { projects } from "../../data/projects";
import { skillGroups } from "../../data/skills";

export function ResumeApp() {
  return (
    <div className="resume-app">
      <header className="resume-header"><div><p className="path-label">~/documents/resume.pdf</p><h2>{profile.name}</h2><p>{profile.role} · {profile.email} · {profile.location}</p></div><div><a className="button-primary" href={profile.resumePath} download><Download /> Download resume</a><button className="button-secondary" onClick={() => window.print()}><Printer /> Print</button></div></header>
      <div className="resume-body">
        <section><h3>Experience</h3>{experience.map((item) => <article className="resume-entry" key={item.company}><header><div><b>{item.role}</b><span>{item.company}</span></div><div><b>{item.dates}</b><span><MapPin />{item.location}</span></div></header><ul>{item.accomplishments.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</section>
        <section><h3>Projects</h3><div className="resume-projects">{projects.slice(0, 3).map((project) => <article key={project.name}><b>{project.name}<ExternalLink /></b><p>{project.description}</p><span>{project.technologies.join(" · ")}</span></article>)}</div></section>
        <section><h3>Education</h3>{education.map((item) => <article className="resume-entry education-entry" key={item.school}><GraduationCap /><div><b>{item.school}</b><span>{item.degree} · {item.dates}</span><p>{item.detail}</p></div></article>)}</section>
        <section><h3>Technical skills</h3><div className="resume-skills">{skillGroups.map((group) => <p key={group.name}><b>{group.name}:</b> {group.items.join(", ")}</p>)}</div></section>
      </div>
    </div>
  );
}
