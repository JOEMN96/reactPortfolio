import React from "react";
import "./additionalCSS/button.css";
import { motion } from "framer-motion";

const anim = {
  initial: { x: -100, opacity: 0 },
  visible: {
    x: [-100, 0, 20, -20, 20, -20, 0],
    opacity: 1,
    transition: { type: "spring", stifness: 300, bounce: 1 },
  },
  hover: {
    scale: 1.1,
  },
};

function Button({ text }) {
  return (
    <div className="btn-contain">
      <motion.div
        variants={anim}
        initial="initial"
        animate="visible"
        whileHover="hover"
        className="btn-skew-contain"
      >
        <p className="btn-skew">
          <span>{text}</span>
        </p>
      </motion.div>
    </div>
  );
}

export default Button;
