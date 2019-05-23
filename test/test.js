const expect = require("chai").expect ;



describe("Init Test", function(){

    it("Test 1", function(){
        expect(1).to.be.equal(1);
    }); 
    it("Test 2", function(){

        expect(1).to.not.equal(2);
    });

});
