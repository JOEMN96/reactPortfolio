import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../assets/ParticlesConfig";
function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Particles params={particlesConfig} />
      <h1 className="floatTxt">Hello</h1>
    </div>
  );
}

export default Home;
