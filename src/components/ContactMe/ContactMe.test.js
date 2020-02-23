import React from "react"
import renderer from "react-test-renderer"

import ContactMe from "./ContactMe"

describe("ContactMe", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ContactMe />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
