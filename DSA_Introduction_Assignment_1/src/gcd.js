/**
 * Write a function named gcd1 that implements algorithm 1 here
 */

function gcd1(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

/**
 * Write a function named gcd2 that implements algorithm 2 here
 */

function gcd2(a, b) {}

module.exports = { gcd1, gcd2 };
