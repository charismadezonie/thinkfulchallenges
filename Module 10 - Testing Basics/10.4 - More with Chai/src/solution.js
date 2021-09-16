/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  return !students.some((student) => student.name === name)
    ? null
    : students.find((student) => student.name === name);
}

module.exports = findStudentByName;
