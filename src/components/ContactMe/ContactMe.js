import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import "./ContactMe.scss"

const ContactMe = () => (
  <>
    <section id="contact-me">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img
              src="/icons/icon-72x72.png"
              className="img-fluid"
              alt="Wen Ting Wang Icon"
            />
            <h4>
              <b>Wen Ting Wang</b>
              <br />
              <small>Let's develop Tings together.</small>
            </h4>
            <div id="social-links">
              <a
                href="https://github.com/chubberlisk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wen Ting Wang's GitHub Profile"
                data-toggle="tooltip"
                data-placement="top"
                title="GitHub - Chubberlisk"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/wen-ting-wang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wen Ting Wang's LinkedIn Profile"
                data-toggle="tooltip"
                data-placement="top"
                title="LinkedIn - Chubberlisk"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ContactMe
