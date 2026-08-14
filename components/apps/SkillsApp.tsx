import { Box, Check, Package } from "lucide-react";
import { skillGroups } from "../../data/skills";

export function SkillsApp() {
  return (
    <div className="skills-app">
      <div className="app-intro"><p className="path-label">devbox package list</p><h2>Installed capabilities</h2><p>The languages and tools I reach for to ship reliable, maintainable software.</p></div>
      <div className="package-summary"><Box /><div><b>{skillGroups.reduce((sum, group) => sum + group.items.length, 0)} packages installed</b><span>environment healthy · no proficiency percentages</span></div><em><Check /> verified</em></div>
      <div className="skill-grid">
        {skillGroups.map((group) => <article key={group.name}><header><Package /><div><b>{group.name}</b><code>@portfolio/{group.command}</code></div><span>{group.items.length}</span></header><ul>{group.items.map((skill, index) => <li key={skill}><span>{index === group.items.length - 1 ? "└──" : "├──"}</span>{skill}<small>installed</small></li>)}</ul></article>)}
      </div>
    </div>
  );
}
