import React from "react";
import githubImg from "../assets/images/github.PNG";
// Images👇🏻
import AmazonClone from "../assets/images/amazonclone.PNG";
import akints from "../assets/images/akints.PNG";
import bizz from "../assets/images/bizz.PNG";
import mtl from "../assets/images/mtl.PNG";
import oldportfolio from "../assets/images/oldportfolio.PNG";

import { BiLinkExternal } from "react-icons/bi";

function Work() {
  return (
    <section className="worksPage">
      <h2>Some of the projects i worked on </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="workPgCard">
              <div className="cardImg">
                <img src={githubImg} alt="" />
              </div>
              <div className="workPgCardContent">
                <div className="externalLink">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://joereact-searchusers.netlify.app/"
                  >
                    <BiLinkExternal />
                  </a>
                </div>
                <p>You can search github users via this react based page.</p>
                <div className="stacktags">
                  <span>React</span> <span>Bootstrap</span>
                  <span>Framer motion</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="workPgCard">
              <div className="cardImg">
                <img src={mtl} alt="" />
              </div>
              <div className="workPgCardContent">
                <div className="externalLink">
                  <a
                    href="https://mtlitservice.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    <BiLinkExternal />
                  </a>
                </div>
                <p>My first site for a client, Design to Web. </p>
                <div className="stacktags">
                  <span>Html</span> <span>Css</span>
                  <span>Materialize Css</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="workPgCard">
              <div className="cardImg">
                <img src={AmazonClone} alt="" />
              </div>
              <div className="workPgCardContent">
                <div className="externalLink">
                  <a
                    href="https://joezreactecommerce.netlify.app/"
                    target="_blank"
                    rel="noopener"
                  >
                    <BiLinkExternal />
                  </a>
                </div>
                <p>
                  Amazon clone using react and contentful headless cms (Project
                  Not finished){" "}
                </p>
                <div className="stacktags">
                  <span>React</span> <span>Contentful</span>
                  <span>Scss</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="workPgCard">
              <div className="cardImg">
                <img src={oldportfolio} alt="" />
              </div>
              <div className="workPgCardContent">
                <div className="externalLink">
                  <a
                    href="https://joemn.netlify.app/"
                    target="_blank"
                    rel="noopener"
                  >
                    <BiLinkExternal />
                  </a>
                </div>
                <p>
                  My old portfolio with night mode and a litte neumorphism
                  design Principle.{" "}
                </p>
                <div className="stacktags">
                  <span>React</span> <span>Contentful</span>
                  <span>Scss</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="workPgCard">
              <div className="cardImg">
                <img src={bizz} alt="" />
              </div>
              <div className="workPgCardContent">
                <div className="externalLink">
                  <a
                    href="https://bizzexperts.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    <BiLinkExternal />
                  </a>
                </div>
                <p>
                  A social media website. Worked on this project as a team at my
                  new Company (
                  <a
                    className="voxforem"
                    target="_blank"
                    rel="noopener"
                    href="https://voxforem.com/"
                  >
                    Voxforem
                  </a>
                  ).
                </p>
                <div className="stacktags">
                  <span>Javascript</span> <span>Html</span>
                  <span>css</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="workPgCard">
              <div className="cardImg">
                <img src={akints} alt="" />
              </div>
              <div className="workPgCardContent">
                <div className="externalLink">
                  <a href="https://akints.com/" target="_blank" rel="noopener">
                    <BiLinkExternal />
                  </a>
                </div>
                <p>
                  School website.This is my first project as a frontend
                  developer in voxforem.
                </p>
                <div className="stacktags">
                  <span>React</span> <span>Contentful</span>
                  <span>Scss</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
