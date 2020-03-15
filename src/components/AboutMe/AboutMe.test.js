import React from "react"
import renderer from "react-test-renderer"

import AboutMe from "./AboutMe"

describe("AboutMe", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AboutMe />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
