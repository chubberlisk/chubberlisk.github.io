import React from "react"
import NextSection from "../NextSection/NextSection"

import "./Landing.scss"

const Landing = () => (
  <>
    <section id="landing">
      <div className="container text-center">
        <h1>Hi there!</h1>
        <h1>
          My name is <b>Wen Ting Wang</b>.
        </h1>
        <h1>But you can just call me</h1>
        <h1>
          <mark className="hvr-buzz">
            <b>Ting</b>
          </mark>
          .
        </h1>
      </div>
    </section>
    <NextSection href="#about-me" color="black" />
  </>
)

export default Landing
