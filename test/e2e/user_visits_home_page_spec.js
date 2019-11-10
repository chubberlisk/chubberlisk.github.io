describe("User visits home page", function() {
  it("shows the landing section", function() {
    cy.visit("/")

    cy.get(".landing").should("include.text", "Hi there!")
  })
})
