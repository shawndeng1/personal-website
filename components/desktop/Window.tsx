"use client";

import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";
import type { ReactNode } from "react";

export function Window({ title, icon, children, onClose, wide = false }: { title: string; icon?: ReactNode; children: ReactNode; onClose: () => void; wide?: boolean }) {
  return (
    <motion.section
      className={`app-window ${wide ? "window-wide" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: 12 }}
      transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <header className="window-titlebar">
        <div className="window-controls">
          <button className="close" onClick={onClose} aria-label={`Close ${title}`}><X /></button>
          <button aria-label="Minimize window"><Minus /></button>
          <button aria-label="Maximize window"><Square /></button>
        </div>
        <div className="window-title">{icon}{title}</div>
        <div className="window-meta">portfolio.local</div>
      </header>
      <div className="window-content">{children}</div>
    </motion.section>
  );
}
