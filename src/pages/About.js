import React from "react";
import { BiPen } from "react-icons/bi";
import { SiDevDotTo } from "react-icons/si";
import { GiStickFrame } from "react-icons/gi";
import { VscLibrary } from "react-icons/vsc";
import { BsTools } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import Button from "../components/Button";
import PDF from "../assets/RESUME.pdf";

function About() {
  return (
    <div className="container aboutContainer">
      <div className="row">
        <div className="col introCOl ">
          <h2>Hi !</h2>
          <p>
            My name is Joe Mon I'm a 24 year old Front End Developer based in
            Nagercoil.
          </p>
          <p>
            I spend my days with my hands in front end engneering , digital
            accessibility, user experience and visual design.
          </p>
          <p>
            I describe myself as a passionate developer who loves coding, open
            source, and the web platform ❤️. Aside from my job, I like to create
            and contribute to open source projects. That helps me to learn a ton
            of new stuff, grow as a developer and support other open source
            projects.
          </p>
          <h1 className="skills"> Skills</h1>
          <div className="underLine"></div>
          <p className="text-center">
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <div className="aboutMEColorBx row">
            <div className="col-md-4">
              <BiPen className="AboutIcon design" />
              <h3>Design</h3>
              <h4>Tools I Use</h4>
              <p>Figma</p>
              <p>PhotoShop</p>
              <p>XD</p>
            </div>
            <div className="col-md-4">
              <SiDevDotTo className="AboutIcon" />
              <h3>Development</h3>
              <h4> Languages I speak</h4>
              <p>HTML</p>
              <p>CSS</p>
              <p>Sass</p>
              <p>Javascript</p>
            </div>
            <div className="col-md-4">
              <GiStickFrame className="AboutIcon" />
              <h3>Frameworks</h3>
              <h4> FrameWorks I Use</h4>
              <p>React</p>
              <p>Bootstrap</p>
              <p>Materialize Css</p>
              <p></p>
            </div>
            <div className="col-md-4">
              <VscLibrary className="AboutIcon" />
              <h3>Libraries</h3>
              <h4> Libraries I Use</h4>
              <p>Contentful</p>
              <p>Framer Motion</p>
              <p>Jquery</p>
              <p>Animate.js</p>
              <p></p>
            </div>
            <div className="col-md-4">
              <BsTools className="AboutIcon" />
              <h3>Tools</h3>
              <h4> Tools I Use</h4>
              <p>Git/Github</p>
              <p>Gulp</p>
              <p>Babel</p>
              <p>Webpack</p>
            </div>
            <div className="col-md-4">
              <FiServer className="AboutIcon" />
              <h3>Backend</h3>
              <h4> Server side</h4>
              <p>Firebase</p>
            </div>
          </div>
          <p>
            <a target="_blank" href={PDF}>
              Click here to view my Resume !
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
