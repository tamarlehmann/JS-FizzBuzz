describe("FizzBuzz", function() {
  var fizz;
  var buzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should return fizz if divisible by 3", function() {
    expect(fizzbuzz.number(3)).toEqual("fizz");
    expect(fizzbuzz.number(9)).toEqual("fizz");
  });

  it("should return fizz if divisible by 5", function() {
    expect(fizzbuzz.number(5)).toEqual("buzz");
    expect(fizzbuzz.number(10)).toEqual("buzz");
  });

  it("should return fizz if divisible by both 3 and 5", function() {
    expect(fizzbuzz.number(15)).toEqual("fizzbuzz");
    expect(fizzbuzz.number(30)).toEqual("fizzbuzz");
  });

  it("should return number if not divisible by 3 or 5", function() {
    expect(fizzbuzz.number(2)).toEqual(2);
    expect(fizzbuzz.number(11)).toEqual(11);
  });

});
