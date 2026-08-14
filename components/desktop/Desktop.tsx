"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BatteryMedium, BriefcaseBusiness, CircleUserRound, Command, FileText, FolderGit2, Mail, Moon, Search, Sun, TerminalSquare, UserRound, Wifi, Wrench } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { profile } from "../../data/profile";
import { AboutApp } from "../apps/AboutApp";
import { ContactApp } from "../apps/ContactApp";
import { ExperienceApp } from "../apps/ExperienceApp";
import { ProjectsApp } from "../apps/ProjectsApp";
import { ResumeApp } from "../apps/ResumeApp";
import { SkillsApp } from "../apps/SkillsApp";
import { TerminalApp } from "../apps/TerminalApp";
import { CommandPalette } from "../command/CommandPalette";
import { DesktopIcon } from "./DesktopIcon";
import { Dock } from "./Dock";
import type { AppId } from "./types";
import { Window } from "./Window";

const apps = {
  about: { title: "About — profile.md", icon: UserRound }, projects: { title: "Projects — Finder", icon: FolderGit2 },
  experience: { title: "Experience — git log", icon: BriefcaseBusiness }, skills: { title: "Skills — Packages", icon: Wrench },
  resume: { title: "Resume — Preview", icon: FileText }, contact: { title: "Contact — Compose", icon: Mail }, terminal: { title: "Terminal — portfolio-shell", icon: TerminalSquare },
};

const desktopIcons: { id: AppId; label: string; icon: typeof UserRound; tone: string }[] = [
  { id: "about", label: "About", icon: UserRound, tone: "gold" }, { id: "experience", label: "Experience", icon: BriefcaseBusiness, tone: "purple" },
  { id: "projects", label: "Projects", icon: FolderGit2, tone: "blue" }, { id: "resume", label: "Resume", icon: FileText, tone: "paper" },
  { id: "skills", label: "Skills", icon: Wrench, tone: "green" }, { id: "contact", label: "Contact", icon: Mail, tone: "red" },
  { id: "terminal", label: "Terminal", icon: TerminalSquare, tone: "black" },
];

function BootScreen({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion(); const [line, setLine] = useState(0);
  const lines = ["Initializing portfolio…", "Loading experience…", "Loading projects…", "Developer environment ready."];
  useEffect(() => { if (reduced) { onDone(); return; } const interval = window.setInterval(() => setLine((current) => { if (current >= lines.length - 1) { window.clearInterval(interval); window.setTimeout(onDone, 180); return current; } return current + 1; }), 170); return () => window.clearInterval(interval); }, [onDone, reduced, lines.length]);
  return <motion.div className="boot-screen" exit={{ opacity: 0 }}><div className="boot-logo">{profile.initials}</div><div className="boot-lines">{lines.map((item, index) => <p key={item} className={index <= line ? "visible" : ""}><span>{index < line ? "✓" : index === line ? "›" : "·"}</span>{item}</p>)}</div><div className="boot-progress"><motion.i animate={{ width: `${((line + 1) / lines.length) * 100}%` }} /></div></motion.div>;
}

export function Desktop() {
  const [booted, setBooted] = useState(false); const [active, setActive] = useState<AppId>("about"); const [windowOpen, setWindowOpen] = useState(true); const [palette, setPalette] = useState(false); const [theme, setTheme] = useState<"dark" | "light">("dark"); const [now, setNow] = useState(new Date()); const [seconds, setSeconds] = useState(0);
  useEffect(() => { const timer = window.setTimeout(() => { if (localStorage.getItem("portfolio-theme") === "light") setTheme("light"); }, 0); return () => window.clearTimeout(timer); }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("portfolio-theme", theme); }, [theme]);
  useEffect(() => { const timer = window.setInterval(() => { setNow(new Date()); setSeconds((value) => value + 1); }, 1000); return () => window.clearInterval(timer); }, []);
  const openApp = useCallback((id: AppId) => { setActive(id); setWindowOpen(true); }, []);
  const toggleTheme = useCallback(() => setTheme((value) => value === "dark" ? "light" : "dark"), []);
  useEffect(() => { const key = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPalette((value) => !value); } if (event.key === "Escape") setPalette(false); }; window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, []);
  const content = useMemo(() => ({ about: <AboutApp onOpen={openApp} />, projects: <ProjectsApp />, experience: <ExperienceApp />, skills: <SkillsApp />, resume: <ResumeApp />, contact: <ContactApp />, terminal: <TerminalApp onOpen={openApp} /> }), [openApp]);
  const AppIcon = apps[active].icon;
  const uptime = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  return (
    <><AnimatePresence>{!booted && <BootScreen onDone={() => setBooted(true)} />}</AnimatePresence>{booted && <motion.main className="os-desktop" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="system-bar"><div className="system-brand"><span>{profile.initials}</span><b>{profile.name}</b></div><nav aria-label="System navigation"><button onClick={() => openApp("about")}>Portfolio</button><button onClick={() => openApp("projects")}>Projects</button><button onClick={() => openApp("resume")}>Resume</button></nav><div className="system-status"><button onClick={() => setPalette(true)}><Search /> Search</button><button onClick={toggleTheme} aria-label={`Use ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? <Sun /> : <Moon />}</button><Wifi /><BatteryMedium /><time>{now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</time></div></header>
      <div className="desktop-area">
        <div className="desktop-watermark"><span>DEV / OS</span><p>Build thoughtfully.<br />Ship reliably.</p></div>
        <div className="desktop-icons">{desktopIcons.map((item) => <DesktopIcon key={item.id} {...item} onOpen={openApp} />)}</div>
        <AnimatePresence mode="wait">{windowOpen && <Window key={active} title={apps[active].title} icon={<AppIcon />} onClose={() => setWindowOpen(false)} wide={active !== "terminal"}>{content[active]}</Window>}</AnimatePresence>
      </div>
      <Dock active={active} onOpen={openApp} />
      <footer className="taskbar"><span><i /> System ready</span><button onClick={() => setPalette(true)}><Command /> <b>Quick open</b><kbd>⌘ K</kbd></button><span className="taskbar-right">uptime {uptime}<CircleUserRound />{profile.initials}</span></footer>
      <CommandPalette open={palette} onClose={() => setPalette(false)} onOpen={openApp} theme={theme} toggleTheme={toggleTheme} />
    </motion.main>}</>
  );
}
