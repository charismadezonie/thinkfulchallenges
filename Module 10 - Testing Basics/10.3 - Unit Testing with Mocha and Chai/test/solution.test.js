// Write your tests here!
const expect = require("chai").expect;
const findStudentScoreByName = require("../src/solution");

describe("findStudentScoreByName", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  it("should return the score for the given student", () => {
    const expected = 9.2;
    const actual = findStudentScoreByName(students, "Natalee Vargas");
    expect(expected).to.equal(actual);
  });
  it("should return a number if a name is given and null otherwise", () => {
    const expected = null;
    const actual = findStudentScoreByName(students);
    expect(expected).to.equal(actual);
  });
  it("should return null if incorrect name is given", () => {
    const expected = null;
    const actual = findStudentScoreByName(students, "Thad Daniels");
    expect(expected).to.equal(actual);
  });
});
