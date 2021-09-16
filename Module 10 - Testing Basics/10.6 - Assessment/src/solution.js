/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

// function partitionStudentsByScore(students, score) {
//   const lower = students.filter((student) => student.score <= score);
//   const upper = students.filter((student) => student.score > score);
//   return [[...lower], [...upper]];
// }

function partitionStudentsByScore(students, score) {
  return students.reduce(
    (acc, student) => {
      student.score <= score ? acc[0].push(student) : acc[1].push(student);
      return acc;
    },
    [[], []]
  );
}

module.exports = partitionStudentsByScore;
