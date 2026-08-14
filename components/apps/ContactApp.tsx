"use client";

import { ArrowUpRight, ContactRound as Linkedin, GitFork as Github, Mail, Send } from "lucide-react";
import { profile } from "../../data/profile";

export function ContactApp() {
  const send = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(String(data.get("message")))}`;
  };
  return (
    <div className="contact-app">
      <div className="contact-copy"><p className="path-label">~/inbox/new-message</p><h2>Let&apos;s build something worthwhile.</h2><p>Have a role, a project, or just a good technical question? My inbox is open.</p><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail /><span><small>Email</small>{profile.email}</span><ArrowUpRight /></a><a href={profile.github} target="_blank" rel="noreferrer"><Github /><span><small>GitHub</small>@shawndeng1</span><ArrowUpRight /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /><span><small>LinkedIn</small>/in/shawnd-software-engineer</span><ArrowUpRight /></a></div></div>
      <form className="compose-card" onSubmit={send}><div className="compose-header"><span>New message</span><span>mailto://</span></div><label>To<input value={profile.email} readOnly /></label><label>Subject<input name="subject" required placeholder="A role, project, or hello" /></label><label>Message<textarea name="message" required placeholder="Tell me a little about what you have in mind…" /></label><button className="button-primary" type="submit"><Send /> Open email client</button><small>No backend, no tracking. This opens your email app.</small></form>
    </div>
  );
}
