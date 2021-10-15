// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alphabetKey = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    let result = "";
    if (!alphabet || alphabet.length !== 26) return false;
    for (let i=0; i<alphabet.length; i++) {
      for (let j=i+1; j<alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) return false;
      }
    }
    for (let i=0; i<input.length; i++) {
      const currentCodeLetter = input[i].toLowerCase();
      if (currentCodeLetter === " ") result += currentCodeLetter;
      for (let j=0; j<alphabetKey.length; j++) {
        let currentAlphaLetter;
        if (encode) {
          currentAlphaLetter = alphabetKey[j];
          if (currentCodeLetter === currentAlphaLetter) result += alphabet[j];
        } else {
          currentAlphaLetter = alphabet[j];
          if (currentCodeLetter === currentAlphaLetter) result += alphabetKey[j];
        }
      }
    }
    return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
