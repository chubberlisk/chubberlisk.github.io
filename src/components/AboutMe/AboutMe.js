import React from "react"
import NextSection from "../NextSection/NextSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaintBrush,
  faPhotoVideo,
  faLaughSquint,
  faGamepad,
  faMusic,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons"

import "./AboutMe.scss"

const AboutMe = () => (
  <>
    <section id="about-me">
      <div className="container">
        <h2>A bit about me</h2>
        <p>
          I’m a Software Engineer at{" "}
          <a
            href="https://madetech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made Tech
          </a>
          , after graduating from the{" "}
          <a
            href="https://madetech.com/careers/academy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Academy
          </a>{" "}
          programme in 2019. I build software that makes our customers happy,
          using Agile practices and techniques such as continuous delivery,
          test-driven development and pair programming. More recently though,
          I’ve been using Microsoft Paint and Photos to bring a little silliness
          into the workplace.
        </p>
        <h3>Interests</h3>
        <div className="row">
          <div className="col-6 col-md-4 col-xl">
            <div className="card card-default h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faLaughSquint} size="lg" />
                Puns
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl">
            <div className="card card-default h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faPaintBrush} size="lg" />
                Microsoft Paint
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl">
            <div className="card card-default h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faPhotoVideo} size="lg" />
                Microsoft Photos
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl">
            <div className="card card-default h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faGamepad} size="lg" />
                Gaming
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl">
            <div className="card card-default h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faMusic} size="lg" />
                Ukulele
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl">
            <div className="card card-default h-100">
              <div className="card-body">
                <FontAwesomeIcon icon={faFutbol} size="lg" />
                Football
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NextSection href="#contact-me" backgroundColor="#004385" color="white" />
  </>
)

export default AboutMe
