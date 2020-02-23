describe("User visits home page", function() {
  it("shows the landing section", function() {
    whenIVisitTheHomePage()

    thenISeeTheWelcomeText()
    andISeeTheSlogan()
    andISeeTheGitHubLink()
    andISeeAFooter()
  })

  function whenIVisitTheHomePage() {
    cy.visit("/")
  }

  function thenISeeTheWelcomeText() {
    cy.get("#landing").should("include.text", "Hi there!")
  }

  function andISeeTheSlogan() {
    cy.get("section#contact-me").should(
      "include.text",
      "Let's develop Tings together."
    )
  }

  function andISeeTheGitHubLink() {
    cy.get("section#contact-me a")
      .should("have.attr", "href")
      .and("include", "https://github.com/chubberlisk")
  }

  function andISeeAFooter() {
    cy.get("footer").should("include.text", "© 2020 Copyright: Wen Ting Wang")
  }
})
