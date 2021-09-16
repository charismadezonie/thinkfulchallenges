// Write your tests here!
const expect = require("chai").expect;
const findStudentByName = require("../src/solution");

describe("findStudentByName", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  it("should return student object if given a valid student name", () => {
    const expected = { name: "Natalee Vargas", score: 9.2 };
    const actual = findStudentByName(students, "Natalee Vargas");
    expect(actual).to.eql(expected);
  });
  it("should return null if invalid student name", () => {
    const actual = findStudentByName(students, "Thad Daniels");
    expect(actual).to.be.null;
  });
});
