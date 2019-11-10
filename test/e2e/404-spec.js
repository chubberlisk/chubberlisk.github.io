describe("404", function() {
  context("when visiting the 404 page", function() {
    it("shows the 'Not found' page", function() {
      whenIVisitThe404Page()

      thenISeeTheNotFoundPage()
    })
  })

  context("when visiting a page that does not exist", function() {
    it("shows the 'Not found' page", function() {
      whenIVisitAPageThatDoesNotExist()
      andIClickPreviewCustom404Page()

      thenISeeTheNotFoundPage()
    })
  })

  function whenIVisitThe404Page() {
    cy.visit("/404")
  }

  function whenIVisitAPageThatDoesNotExist() {
    cy.visit("/yo-imma-page-that-does-not-exist")
  }

  function andIClickPreviewCustom404Page() {
    cy.contains("Preview custom 404 page").click()
  }

  function thenISeeTheNotFoundPage() {
    cy.get("#not-found").should(
      "include.text",
      "Eh, sorry lah! Someting has gone wang."
    )
  }
})
