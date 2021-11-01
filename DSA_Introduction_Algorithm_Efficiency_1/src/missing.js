/**
 The missing number problem
 Implement algorithm 1 here
*/

exports.missing1 = (A) => {
  const N = A.length + 1;
  for (let i = 1; i < N; i++) {
    let found = false;
    let j = 0;
    while (found === false && j < A.length) {
      if (i === A[j]) {
        found = true;
      }
      j++;
    }
    if (found === false) {
      return i;
    }
  }
};

/**
The missing number problem
Implement algorithm 2 here
*/

exports.missing2 = (A) => {
  const N = A.length + 1;
  const fullSum = (N * (N + 1)) / 2;
  let sum = A.reduce((a, b) => a + b);
  return fullSum - sum;
};
