function printNames(names) {
  names.forEach((element) => console.log(element));
}

function logTreeType(trees) {
  trees.forEach((element) => console.log(element.type));
}

function totalPoints(points) {
  let total = 0;
  points.forEach((element) => (total += element));
  return total;
}

function buildSentence(words) {
  let sentence = "";
  words.forEach((element) => (sentence += element + " "));
  return sentence;
}

function logPercentages(decimals) {
  decimals.forEach((element) => console.log(element * 100 + "%"));
}

module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
