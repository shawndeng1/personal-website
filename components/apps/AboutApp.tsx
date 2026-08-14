import { ArrowUpRight, ContactRound as Linkedin, Download, GitFork as Github, Mail, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import type { AppId } from "../desktop/types";

export function AboutApp({ onOpen }: { onOpen: (id: AppId) => void }) {
  return (
    <div className="about-app">
      <div className="hero-grid">
        <div>
          <p className="path-label">~/portfolio/about.md</p>
          <p className="availability"><i /> {profile.availability}</p>
          <h1>{profile.name}<br /><span>{profile.role}.</span></h1>
          <p className="hero-copy">{profile.intro}</p>
          <p className="typing-line">{profile.tagline}<span className="terminal-cursor" /></p>
          <div className="hero-actions">
            <button className="button-primary" onClick={() => onOpen("projects")}>View my work <ArrowUpRight /></button>
            <button className="button-secondary" onClick={() => onOpen("resume")}><Download /> Resume</button>
          </div>
        </div>
        <aside className="currently-card">
          <div className="card-kicker"><span>NOW.md</span><span>updated recently</span></div>
          <h2>Currently</h2>
          <p>{profile.focus}</p>
          <div className="current-meta"><MapPin /> {profile.location}</div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
          </div>
        </aside>
      </div>
      <div className="quick-facts">
        <div><span>01</span><b>Systems minded</b><p>Reliability, performance, and clear architecture.</p></div>
        <div><span>02</span><b>Product aware</b><p>Software measured by the experience it creates.</p></div>
        <div><span>03</span><b>Always learning</b><p>Curious across the stack and deliberate in execution.</p></div>
      </div>
    </div>
  );
}
