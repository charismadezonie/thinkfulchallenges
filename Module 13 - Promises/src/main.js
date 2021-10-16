const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  return tell(question).then((fortune) => [
    `Your question was: ${question}`,
    `Your fortune is: ${fortune}`
  ]).catch((err) => {
    return `There was an error: ${err}`
  })
}

function fullSession(question) {
  return welcome().then((welcomeMessage) =>
    getFortune(question).then((middleLines) => 
      goodbye().then((goodbyeMessage) => {
        return [welcomeMessage].concat(middleLines).concat([goodbyeMessage])
  })))
}

module.exports = { getFortune, fullSession };
