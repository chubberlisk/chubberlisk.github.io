import React from "react"

import SEO from "../components/SEO/SEO"
import Landing from "../components/Landing/Landing"
import AboutMe from "../components/AboutMe/AboutMe"
import ContactMe from "../components/ContactMe/ContactMe"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Landing />
    <AboutMe />
    <ContactMe />
    <Footer />
  </>
)

export default IndexPage
