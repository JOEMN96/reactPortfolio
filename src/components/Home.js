import React, { useEffect } from "react";
import Particles from "react-particles-js";
import particlesConfig from "../assets/ParticlesConfig";
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
const anim = {
  initial: { y: -200, opacity: 0 },
  end: {
    y: 1,
    opacity: 1,
    transition: { delay: 1, type: "spring", stiffness: 200 },
  },
};

function Home() {
  useEffect(() => {
    // function([string1, string2],target id,[color1,color2])
    consoleText(
      ["Hello !", "Iam Joe Mon", "A web developer & designer."],
      "text",
      ["white", "white", "white"]
    );

    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ["#fff"];
      var visible = true;
      var con = document.getElementById("console");
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
      target.setAttribute("style", "color:" + colors[0]);
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute("style", "color:" + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);
      window.setInterval(function () {
        if (visible === true) {
          con.className = "console-underscore hidden";
          visible = false;
        } else {
          con.className = "console-underscore";

          visible = true;
        }
      }, 400);
    }
  }, []);

  return (
    <motion.div
      variants={routerAnims}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ overflow: "hidden" }}
    >
      <Particles params={particlesConfig} />

      {/* <h1 className="floatTxt">Hello</h1> */}
      <motion.h3
        variants={anim}
        initial="initial"
        animate="end"
        className="floatTxt"
      >
        <span id="text"></span>{" "}
        <span className="console-underscore" id="console">
          &#95;
        </span>
      </motion.h3>
    </motion.div>
  );
}

export default Home;
