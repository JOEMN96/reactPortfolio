import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { RiCodepenLine } from "react-icons/ri";

function Contact() {
  return (
    <div className="container contactME">
      <div className="row ">
        <div className="col-md-6">
          <div className="mainContactCol">
            <h3>Get in touch with me !</h3>
            <p className="contactTagP">
              Lets create something beautiful together !
            </p>
            <div className="contactCard">
              <div className="cardHead">
                <h4>
                  GitHub <AiFillGithub className="contactIcon" />
                </h4>

                <a
                  target="_blank"
                  href="https://github.com/JOEMN96"
                  rel="noopener"
                >
                  Visit
                </a>
              </div>
              <p>Checkout my github repos. </p>
            </div>
            <div className="contactCard card2Silver">
              <div className="cardHead ">
                <h4>
                  LinkedIn <AiFillLinkedin className="contactIcon" />
                </h4>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/joe-mon-70bb641a5/"
                  rel="noopener"
                >
                  Visit
                </a>
              </div>
              <p>Learn more about me by visiting my linkedin profile.</p>
            </div>
            <div className="contactCard ">
              <div className="cardHead ">
                <h4>
                  Twitter <AiOutlineTwitter className="contactIcon" />
                </h4>

                <a
                  target="_blank"
                  href="https://twitter.com/aruljoe37"
                  rel="noopener"
                >
                  Visit
                </a>
              </div>
              <p>Tweet me @aruljoe37</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 contactCol2">
          <div className="contactCol2head">
            <h3>More</h3>
            <p className="contactTagP">More Ways to connect with me</p>
            <div className="contactCard card2Silver">
              <div className="cardHead ">
                <h4>
                  Phone <BiPhone className="contactIcon" />
                </h4>

                <a href="tel:9087531393" rel="noopener">
                  Call
                </a>
              </div>
              <p>Call me @ 9087531393</p>
            </div>
            <div className="contactCard ">
              <div className="cardHead ">
                <h4>
                  Mail <AiOutlineMail className="contactIcon" />
                </h4>

                <a href="mailto:aruljoe37@gmail.com" rel="noopener">
                  Mail
                </a>
              </div>
              <p>Mail me @ aruljoe37@gmail.com </p>
            </div>
            <div className="contactCard card2Silver ">
              <div className="cardHead ">
                <h4>
                  Codepen <RiCodepenLine className="contactIcon" />
                </h4>

                <a
                  href="https://codepen.io/JOEMN"
                  target="_blank"
                  rel="noopener"
                >
                  Visit
                </a>
              </div>
              <p>Checkout my pens on codepen </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
