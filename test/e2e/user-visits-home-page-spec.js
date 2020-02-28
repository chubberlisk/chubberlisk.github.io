describe("User visits home page", function() {
  it("shows the landing and contact me section", function() {
    whenIVisitTheHomePage()

    thenISeeTheWelcomeText()
    andISeeTheSlogan()
    andISeeTheGitHubLink()
    andISeeTheLinkedInLink()
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
    cy.get("section#contact-me a:nth-child(1)")
      .should("have.attr", "href")
      .and("include", "https://github.com/chubberlisk")
  }

  function andISeeTheLinkedInLink() {
    cy.get("section#contact-me a:nth-child(2)")
      .should("have.attr", "href")
      .and("include", "https://www.linkedin.com/in/wen-ting-wang")
  }

  function andISeeAFooter() {
    cy.get("footer").should("include.text", "© 2020 Copyright: Wen Ting Wang")
  }
})
