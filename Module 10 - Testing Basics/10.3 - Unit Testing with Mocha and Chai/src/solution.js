/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  return !students.some((student) => student.name === name)
    ? null
    : students.find((student) => student.name === name).score;
}

module.exports = findStudentScoreByName;
