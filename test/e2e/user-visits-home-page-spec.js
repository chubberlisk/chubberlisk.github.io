describe("User visits home page", function() {
  it("shows the landing section", function() {
    whenIVisitTheHomePage()

    thenISeeTheWelcomeText()
  })

  function whenIVisitTheHomePage() {
    cy.visit("/")
  }

  function thenISeeTheWelcomeText() {
    cy.get("#landing").should("include.text", "Hi there!")
  }
})
