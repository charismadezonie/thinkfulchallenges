// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");
const caesar = require("../src/caesar");

describe("caesar", () => {
  it("should shift all letters by shift value", () => {
    actual = caesarModule.caesar("hailstate", 3);
    expect(actual).to.equal("kdlovwdwh");
  });
  it("should be able to handle negative shift", () => {
    actual = caesarModule.caesar("thinkful", -3);
    expect(actual).to.equal("qefkhcri");
  });
  
  // The following three tests satisfy a single passing requirement
  it("should return false if shift is 0", () => {
    actual = caesarModule.caesar("hailstate", 0);
    expect(actual).to.equal(false);
  });
  it("should return false if shift is over 25", () => {
    actual = caesarModule.caesar("hailstate", 26);
    expect(actual).to.equal(false);
  });
  it("should return false if shift is under -25", () => {
    actual = caesarModule.caesar("hailstate", -26);
    expect(actual).to.equal(false);
  });
  
  // The following test satisfies a passing requirement
  it("should ignore capital letters", () => {
    actual = caesarModule.caesar("HailState", 3);
    expect(actual).to.equal("kdlovwdwh");
  });
  
  // The following two tests satisfy a single passing requirement
  it("should leave spaces if passed", () => {
    actual = caesarModule.caesar("Hail State", 3);
    expect(actual).to.equal("kdlo vwdwh");
  });
  it("should leave special characters if passed", () => {
    actual = caesarModule.caesar("#hailstate", 3);
    expect(actual).to.equal("#kdlovwdwh");
  });
  
  // The following two tests satisfy a single passing requirement
  it("should wrap backwards shifts from front of alphabet", () => {
    actual = caesarModule.caesar("hailstate", -1);
    expect(actual).to.equal("gzhkrszsd");
  });
  it("should wrap forward shifts from end of alphabet", () => {
    actual = caesarModule.caesar("hailstate", 7);
    expect(actual).to.equal("ohpszahal");
  });
});
