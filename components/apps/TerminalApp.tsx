"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { projects } from "../../data/projects";
import type { AppId } from "../desktop/types";

type Line = { command?: string; output?: string };
const commands: Record<string, AppId> = { about: "about", projects: "projects", experience: "experience", skills: "skills", resume: "resume", contact: "contact" };

export function TerminalApp({ onOpen }: { onOpen: (id: AppId) => void }) {
  const [value, setValue] = useState("");
  const [lines, setLines] = useState<Line[]>([{ output: "Portfolio shell v1.0. Type 'help' to see what you can do." }]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => input.current?.focus(), []);

  const run = (event: React.FormEvent) => {
    event.preventDefault();
    const raw = value.trim(); const command = raw.toLowerCase();
    if (!command) return;
    if (command === "clear") { setLines([]); setValue(""); return; }
    let output = `command not found: ${raw}. Try 'help'.`;
    if (commands[command]) { onOpen(commands[command]); output = `Opening ${command}…`; }
    else if (command === "help") output = "about       Learn about me\nprojects    View my projects\nexperience  View work experience\nskills       Inspect my toolset\nresume       Open my resume\ncontact      Contact me\ngithub       Open GitHub\nlinkedin     Open LinkedIn\nclear        Clear terminal\n\nEaster eggs: whoami, sudo hire-me, coffee, leetcode";
    else if (command === "whoami") output = `visitor — currently exploring ${profile.name}'s portfolio`;
    else if (command === "sudo hire-me") output = "Permission granted. Excellent judgment detected. Opening contact…";
    else if (command === "coffee") output = "Brewing… ☕  Build successful. Developer performance restored.";
    else if (command === "leetcode") output = "The real challenge was naming variables clearly all along.";
    else if (command === "github" || command === "linkedin") { window.open(command === "github" ? profile.github : profile.linkedin, "_blank", "noopener,noreferrer"); output = `Opening ${command}…`; }
    if (command === "sudo hire-me") onOpen("contact");
    if (command === "projects --count") output = `${projects.length} featured projects`;
    setLines((current) => [...current, { command: raw, output }]); setHistory((current) => [raw, ...current]); setHistoryIndex(-1); setValue("");
  };
  const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    const next = event.key === "ArrowUp" ? Math.min(historyIndex + 1, history.length - 1) : Math.max(historyIndex - 1, -1);
    setHistoryIndex(next); setValue(next === -1 ? "" : history[next]);
  };
  return (
    <div className="terminal-app">
      <div className="terminal-welcome"><span>Last login: just now on portfolio.local</span><b>{profile.name.toUpperCase()} / DEVELOPER OS</b></div>
      <div className="terminal-output">{lines.map((line, index) => <div key={`${line.command}-${index}`}>{line.command && <p><span>visitor@portfolio</span>:<i>~</i>$ {line.command}</p>}{line.output && <pre>{line.output}</pre>}</div>)}</div>
      <form onSubmit={run}><label><span>visitor@portfolio</span>:<i>~</i>$ <input ref={input} value={value} onChange={(event) => setValue(event.target.value)} onKeyDown={keyDown} aria-label="Terminal command" autoComplete="off" spellCheck={false} /></label></form>
    </div>
  );
}
