// // Please refrain from tampering with the setup code provided here,
// // as the index.html and test files rely on this setup to work properly.
// // Only add code (e.g., helper methods, variables, etc.) within the scope
// // of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false;
    if (!encode) shift = -shift;
    return input.split("").map((letter) => {
        const shiftedCharCode = letter.toLowerCase().charCodeAt() + shift
        if (letter.match(/[a-z]/i)) {
          if (shiftedCharCode < 97) {
            return String.fromCharCode(shiftedCharCode + 26);
          } else if (shiftedCharCode > 122) {
            return String.fromCharCode(shiftedCharCode - 26);
          } else {
            return String.fromCharCode(shiftedCharCode);
          }
        } else {
          return letter;
        }
      }).join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };