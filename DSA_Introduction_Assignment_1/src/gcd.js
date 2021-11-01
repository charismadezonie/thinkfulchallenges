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

function gcd2(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  let divA = [1, a];
  let divB = [1, b];
  let common = [];
  for (let i = 2; i < a.length; i++) {
    if (a % i === 0) {
      divA.push(i);
    }
  }
  for (let i = 2; i < a.length; i++) {
    if (b % i === 0) {
      divB.push(i);
    }
  }
  divA.forEach((n) => {
    if (divB.includes(n)) {
      common.push(n);
    }
  });
  let largest = common[0];
  common.forEach((n) => {
    if (n > largest) {
      largest = n;
    }
  });
  return largest;
}

module.exports = { gcd1, gcd2 };
