// describe block for our suite of tests

describe("calculator tests", ()=>{
    it("should check 7 + 9  equals 16", () => {
        //1 arrange
    cy.visit("localhost:5501/index.html");    

        // 2 act
    cy.get(":nth-child(5) > .number").click();
    cy.get(".btn--plus > .operator").click();
    cy.get(":nth-child(7) > .number").click();
    cy.get("#equals").click();

        // 2 assert
    
    cy.get("#screen-text").should("contain", "16");
        
    });
    it("should check 10 / 5  equals 2", () => {
        //1 arrange
    cy.visit("localhost:5501/index.html");    

        // 2 act
    
    cy.get(":nth-child(13) > .number").click();
    cy.get(".btn--zero > .number").click();
    cy.get(".btn--divide > .operator").click();
    cy.get(":nth-child(10) > .number").click();
    cy.get("#equals").click();

        // 2 assert
    
    cy.get("#screen-text").should("contain", "2");
        
    });
    it("should check that we can clear the screen", () => {
        //1 arrange
    cy.visit("localhost:5501/index.html");    

        // 2 act
    
    cy.get(":nth-child(13) > .number").click();
    cy.get(":nth-child(10) > .number").click();
    cy.get(".clear").click();

        // 2 assert
    
    cy.get("#screen-text").should("contain", "");
        
    });
    it("should check that we can only produce one decimal", () => {
        //1 arrange
    cy.visit("localhost:5501/index.html");    

        // 2 act
    
    cy.get(":nth-child(13) > .number").click();
    cy.get(".decimal").click();
    cy.get(":nth-child(11)").click();
    cy.get(".decimal").click();
    cy.get(":nth-child(11)").click();

        // 2 assert
    
    cy.get("#screen-text").should("contain", "1.66");
        
    });
    it("should check that we can do multiple operators (1 + 6 + 6)", () => {
        //1 arrange
    cy.visit("localhost:5501/index.html");    

        // 2 act
    
    cy.get(":nth-child(13) > .number").click();
    cy.get(".btn--plus > .operator").click();
    cy.get(":nth-child(11)").click();
    cy.get(".btn--plus > .operator").click();
    cy.get(":nth-child(11)").click();
    cy.get("#equals").click();

        // 2 assert
    
    cy.get("#screen-text").should("contain", "13");
        
    });
});