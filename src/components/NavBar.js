import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const [isToggled, setisToggled] = useState(false);
  window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });

  // Cursor functions

  useEffect(() => {
    let customCursor = document.querySelector(".customCursor");
    document.addEventListener("mousemove", (e) => {
      customCursor.setAttribute(
        "style",
        `top:${e.pageY - 12}px; left:${e.pageX - 11}px;`
      );
    });
    document.addEventListener("mousewheel", () => {
      customCursor.setAttribute("style", `top:${-100}px; left:${-100}px;`);
    });
  }, []);

  return (
    <>
      <nav>
        <div className="navWrapper">
          <div className="navMain">
            <div className="logo">
              <Link to="/">
                <h2>JoeMN</h2>
              </Link>
            </div>

            <div>
              <div
                className="trigger"
                onClick={() => {
                  setisToggled(!isToggled);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <div></div>
              </div>
            </div>
          </div>

          <div
            className="navTriggerWrapper"
            className={`navLinks ${isToggled ? "nav-show " : "nav-hide "}`}
          >
            <Link className="animDelayFIx" to="/about">
              About
            </Link>
            <Link to="/work">Works</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="customCursor"></div>
    </>
  );
}
// REMOVED STRIPE
export default NavBar;
