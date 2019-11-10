import React from "react"

import "./NotFound.scss"

const NotFound = () => (
  <>
    <section id="not-found">
      <div className="container">
        <h1>404</h1>
        <h2>
          Eh, sorry lah! Some
          <mark>
            <b>ting</b>
          </mark>{" "}
          has gone{" "}
          <mark>
            <b>wang</b>
          </mark>
          .
        </h2>
        <h2>I can't seem to find what you're looking for.</h2>
        <h2>
          Try heading back to the <a href="/">homepage</a>, that should exist.
        </h2>
      </div>
    </section>
  </>
)

export default NotFound
