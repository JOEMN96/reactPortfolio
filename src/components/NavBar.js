import React, { useState, useEffect } from "react";

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
              <h2>JoeMN</h2>
            </div>

            <div className="navTriggerWrapper">
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

          <div className={`navLinks ${isToggled ? "nav-show " : "nav-hide "}`}>
            <a className="animDelayFIx" href="">
              About
            </a>
            <a href="">Works</a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>

      <div className="customCursor"></div>
    </>
  );
}

export default NavBar;
