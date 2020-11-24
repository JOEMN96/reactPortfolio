import React, { useRef, useEffect } from "react";
import { GlobalContext } from "../context/AppContext";

function SubMenu({ title }) {
  const { isSubmenuOpen, location } = GlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center - 45}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <div
      ref={container}
      className={isSubmenuOpen ? "submenu submenuShow" : "submenu"}
    >
      <h1>aa</h1>
    </div>
  );
}

export default SubMenu;
// style={isSubmenuOpen ? submenustyle : submenuHide}
// const submenustyle = {
//     top: " 40px",
//     left: "67%",
//     zIndex: "3",
//     padding: "20px",
//     position: " absolute",
//     display: "none !important",
//   };

//   const submenuHide = { display: "none" };
