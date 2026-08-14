"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, Command, ContactRound as Linkedin, FileText, FolderGit2, GitFork as Github, Mail, Moon, Search, Sun, TerminalSquare, UserRound, Wrench } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "../../data/profile";
import type { AppId } from "../desktop/types";

export function CommandPalette({ open, onClose, onOpen, theme, toggleTheme }: { open: boolean; onClose: () => void; onOpen: (id: AppId) => void; theme: "dark" | "light"; toggleTheme: () => void }) {
  const [query, setQuery] = useState(""); const input = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) setTimeout(() => input.current?.focus(), 30); }, [open]);
  const actions = useMemo(() => [
    { label: "About me", group: "Navigate", icon: UserRound, run: () => onOpen("about") },
    { label: "View projects", group: "Navigate", icon: FolderGit2, run: () => onOpen("projects") },
    { label: "Open experience", group: "Navigate", icon: BriefcaseBusiness, run: () => onOpen("experience") },
    { label: "Inspect skills", group: "Navigate", icon: Wrench, run: () => onOpen("skills") },
    { label: "Open resume", group: "Navigate", icon: FileText, run: () => onOpen("resume") },
    { label: "Contact me", group: "Navigate", icon: Mail, run: () => onOpen("contact") },
    { label: "Launch terminal", group: "Navigate", icon: TerminalSquare, run: () => onOpen("terminal") },
    { label: "GitHub", group: "Links", icon: Github, run: () => window.open(profile.github, "_blank", "noopener,noreferrer") },
    { label: "LinkedIn", group: "Links", icon: Linkedin, run: () => window.open(profile.linkedin, "_blank", "noopener,noreferrer") },
    { label: `Switch to ${theme === "dark" ? "light" : "dark"} theme`, group: "Preferences", icon: theme === "dark" ? Sun : Moon, run: toggleTheme },
  ], [onOpen, theme, toggleTheme]);
  const filtered = actions.filter((action) => action.label.toLowerCase().includes(query.toLowerCase()));
  const close = () => { setQuery(""); onClose(); };
  const activate = (run: () => void) => { run(); close(); };
  return <AnimatePresence>{open && <motion.div className="palette-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={close}><motion.div className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" initial={{ y: -20, opacity: 0, scale: .98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -10, opacity: 0 }} onMouseDown={(event) => event.stopPropagation()}><div className="palette-search"><Search /><input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Type a command or search…" onKeyDown={(event) => { if (event.key === "Escape") close(); if (event.key === "Enter" && filtered[0]) activate(filtered[0].run); }} /><kbd>esc</kbd></div><div className="palette-results">{filtered.map((action, index) => <button key={action.label} onClick={() => activate(action.run)} className={index === 0 ? "selected" : ""}><span><action.icon /></span><b>{action.label}</b><small>{action.group}</small>{index === 0 && <kbd>↵</kbd>}</button>)}{filtered.length === 0 && <p>No commands found.</p>}</div><footer><span><Command /> K to open</span><span>↑↓ navigate · ↵ select</span></footer></motion.div></motion.div>}</AnimatePresence>;
}
