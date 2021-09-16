// Write your tests here!
const expect = require("chai").expect;
const partitionStudentsByScore = require("../src/solution");

describe("partitionStudentsByScore", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  const emptyStudents = [];
  it("returns an array of two arrays - under/equal to score arg and above score arg", () => {
    expected = [
      [
        {
          name: "Morgan Sutton",
          score: 7.4,
        },
      ],
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Natalee Vargas", score: 9.2 },
      ],
    ];
    actual = partitionStudentsByScore(students, 8.8);
    expect(actual).to.eql(expected);
  });
  it("allows all students to be in one array", () => {
    const expected = [
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ],
      [],
    ];
    const actual = partitionStudentsByScore(students, 9.5);
    expect(actual).to.eql(expected);
  });
  it("returns two empty arrays if students array is empty", () => {
    const expected = [[], []];
    const actual = partitionStudentsByScore([], 9);
    expect(actual).to.eql(expected);
  });
});
