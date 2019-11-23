describe("User visits home page", function() {
  it("shows the landing section", function() {
    whenIVisitTheHomePage()

    thenISeeTheWelcomeText()
    andISeeAFooter()
  })

  function whenIVisitTheHomePage() {
    cy.visit("/")
  }

  function thenISeeTheWelcomeText() {
    cy.get("#landing").should("include.text", "Hi there!")
  }

  function andISeeAFooter() {
    cy.get("footer").should("include.text", `© 2019 Copyright: Wen Ting Wang`)
  }
})
