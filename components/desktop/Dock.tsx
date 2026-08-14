"use client";

import { BriefcaseBusiness, FileText, FolderGit2, Mail, TerminalSquare, UserRound, Wrench } from "lucide-react";
import type { AppId } from "./types";

const items: { id: AppId; label: string; icon: typeof UserRound }[] = [
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "terminal", label: "Terminal", icon: TerminalSquare },
];

export function Dock({ active, onOpen }: { active: AppId; onOpen: (id: AppId) => void }) {
  return (
    <nav className="os-dock" aria-label="Applications">
      {items.map(({ id, label, icon: Icon }) => (
        <button key={id} onClick={() => onOpen(id)} className={active === id ? "active" : ""} aria-label={`Open ${label}`} title={label}>
          <span><Icon /></span><small>{label}</small>
        </button>
      ))}
    </nav>
  );
}
