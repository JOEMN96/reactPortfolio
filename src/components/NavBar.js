import React, { useState } from "react";

function NavBar() {
  const [isToggled, setisToggled] = useState(false);
  window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });
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
      <div style={{ height: "200vh" }} className="col"></div>
    </>
  );
}

export default NavBar;
