"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { AppId } from "./types";

export function DesktopIcon({ id, label, icon: Icon, onOpen, tone }: { id: AppId; label: string; icon: LucideIcon; onOpen: (id: AppId) => void; tone: string }) {
  return (
    <motion.button className="desktop-icon" onClick={() => onOpen(id)} whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }} aria-label={`Open ${label}`} title={label}>
      <span className={`desktop-icon-glyph ${tone}`}><Icon /></span>
      <span>{label}</span>
    </motion.button>
  );
}
