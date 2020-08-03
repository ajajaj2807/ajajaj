import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { damping: 0, delay: 1.2, ease: "easeInOut" },
      }}
      className="projects-wrapper"
    >
      <div className="project-label">Projects</div>
      <div className="projects-list">
        <Link href="/work/daily-ui">
          <a>Daily UI</a>
        </Link>
      </div>
    </motion.div>
  );
}
