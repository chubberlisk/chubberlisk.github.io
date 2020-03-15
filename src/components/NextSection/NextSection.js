import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

import "./NextSection.scss"

const NextSection = ({ href, backgroundColor, color }) => (
  <div
    className="container-fluid next-section"
    style={{ backgroundColor: backgroundColor }}
  >
    <a className="hvr-wobble-bottom" href={href} style={{ color: color }}>
      <b>
        <FontAwesomeIcon icon={faAngleDown} size="lg" />
        <br />
        Let's go down
      </b>
    </a>
  </div>
)

export default NextSection
