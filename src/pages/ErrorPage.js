import React from "react";
import Button from "../components/Button";
import "../components/additionalCSS/error.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const routerAnims = {
  hidden: {
    opacity: 0,
    x: "200vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.2 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeOut" },
  },
};

function ErrorPage() {
  return (
    <motion.section
      variants={routerAnims}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="errorWrapper">
        <div className="errorPage" title="404">
          404
        </div>
      </div>
      <Link to="/">
        <Button text="Back To  Home" />;
      </Link>
    </motion.section>
  );
}

export default ErrorPage;
