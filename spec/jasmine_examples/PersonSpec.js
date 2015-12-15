describe("Person", function() {
  var Person = require('../../lib/jasmine_examples/Person');
  var person;

  beforeEach(function() {
    person = new Person("Mr", "Tom");
  });

  describe("with income £10000 ", function() {
    it("should pay 20% tax", function() {
      person.setIncome(10000);
      tax = person.tax();
      expect(tax).toEqual(2000);
    });
  });

  describe("with income equal to £31,785 ", function() {
    it("should pay 20% tax", function() {
      person.setIncome(31785);
      tax = person.tax();
      expect(tax).toEqual(6357);
    });
  });

  describe("with income $50000 (between £31,786 and £150,000)", function() {
    it("should pay 40% tax", function() {
      person.setIncome(50000);
      tax = person.tax();
      expect(tax).toEqual(13643);
    });
  });

  describe("with income £200000 (above £150,000)  ", function() {
    it("should pay 45% tax", function() {
      person.setIncome(200000);
      tax = person.tax();
      expect(tax).toEqual(76143);
    });
  });

  describe("with income less than £0", function() {
    it("should throw an exception", function() {
      expect(function() {
        person.setIncome(0);
      }).toThrowError("income must be greater then 0");
    });
  });
  
});
