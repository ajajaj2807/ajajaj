import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["explore", "imagine", "design", "develop", "test", "deploy"];
const colors = ['#11d4fb', '#fe69aa', '#fb5d28', '#f3d914', '#90faa0','#abedeb']
export default function Slider() {
  const [idx, setIdx] = useState(0);
  const [word, setWord] = useState("build");

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((idx) => (idx == words.length - 1 ? 0 : idx + 1));
      setWord(words[idx]);
    }, 2000);

    return () => clearInterval(interval);
  }, [word]);

  return (
    <div className="slider-wrapper">
      I
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.span
        key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity:0}}
          className="words"
          style={{
              color:colors[idx]
          }}
        >
          {" " + word + " "}
        </motion.span>
      </AnimatePresence>
      products.
    </div>
  );
}
